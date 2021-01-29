const axios = require('axios');
const noSql = require('nosql');
const db = noSql.load('/data/beer-db.nosql');

exports.findByName = (req, res) => {
  const name = req.params.name;
  // TODO: Replace spaces with underscores.
  axios
    .get(`https://api.punkapi.com/v2/beers?beer_name=${name}`)
    .then((response) => {
      console.log(response);
      res.send(
        response.data?.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          first_brewed: item.first_brewed,
          food_pairing: item.food_pairing,
        }))
      );
    })
    .catch((error) => {
      res
        .status(500)
        .send(`There was a problem retrieving the list of beer: ${error}`);
    });
};

// TODO: This doesn't work
const findBeerRatingById = (id) =>
  db.find().make((builder) => {
    builder.where('id', id);
    return builder.callback((err, response) => {
      console.log(response);
      return err || response;
    });
  });

exports.addRating = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!id || id < 1) {
    res.status(500).send('Id is invalid');
    return;
  }

  const rating = parseInt(req.body.rating, 10);
  if (!rating || rating < 1 || rating > 5) {
    res.status(500).send('Beer rating must be a number from 1 to 5');
    return;
  }

  const beerRating = {
    id,
    rating,
    comments: req.body.comments || null,
  };

  db.update(beerRating, true).callback((err, count) => {
    console.log(count);
    console.log('The user has been created.');
  });

  res.send(findBeerRatingById(id));
};

exports.findRatingById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!id || id < 1) {
    res.status(500).send('Id is invalid');
    return;
  }

  res.send(findBeerRatingById(id));
};
