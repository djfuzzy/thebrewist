const axios = require('axios');
const cache = require('memory-cache');

const beerRatingsDb = require('../utilities/db-helper').loadBeerRatingsDb;

exports.findByName = (req, res) => {
  const name = req.params.name.replace(' ', '_'); // Punk API requires spaces to be replaced with underscores
  const punkApiRequestUrl = `https://api.punkapi.com/v2/beers?beer_name=${name}`;

  const cachedQuery = cache.get(name);

  if (cachedQuery) {
    res.send(cachedQuery);
  } else {
    axios
      .get(punkApiRequestUrl)
      .then((punkApiRes) => {
        const beers = punkApiRes.data?.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          first_brewed: item.first_brewed,
          food_pairing: item.food_pairing,
        }));
        cache.put(name, beers);
        res.send(beers);
      })
      .catch((error) => {
        res
          .status(500)
          .send(`There was a problem retrieving the list of beers: ${error}`);
      });
  }
};

const findBeerRatingsById = (id, success, failure) =>
  beerRatingsDb.find().make((builder) => {
    builder.where('id', id);
    builder.callback((err, response) => {
      if (err) {
        failure(err);
      } else {
        success(response);
      }
    });
  });

exports.addRating = (req, res) => {
  const id = parseInt(req.params.id);

  if (!id || id < 1) {
    res.status(500).send('Id is invalid');
    return;
  }

  const rating = parseInt(req.body.rating);
  if (!rating || rating < 1 || rating > 5) {
    res.status(500).send('Beer rating must be a number from 1 to 5');
    return;
  }

  const beerRating = {
    id,
    rating,
    comments: req.body.comments || null,
  };

  // TODO: Should id's be unique?
  beerRatingsDb.insert(beerRating).callback((err) => {
    if (err) {
      res
        .status(500)
        .send(`There was an error inserting the beer rating: ${error}`);
    } else {
      findBeerRatingsById(
        id,
        (beerRatings) => res.send(beerRatings),
        (error) =>
          res
            .status(500)
            .send(`There was an error retrieving the beer ratings: ${error}`)
      );
    }
  });
};

exports.findRatingsById = (req, res) => {
  const id = parseInt(req.params.id);

  if (!id || id < 1) {
    res.status(500).send('Id is invalid');
    return;
  }

  findBeerRatingsById(
    id,
    (beerRatings) => res.send(beerRatings),
    (error) =>
      res
        .status(500)
        .send(`There was an error retrieving beer ratings: ${error}`)
  );
};
