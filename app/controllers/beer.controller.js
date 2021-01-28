const axios = require('axios');

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
      // handle error
      console.log(error);
    });
};

// exports.addRating = (req, res) => {
//   const id = req.params.id;

//   const beerRating = req.body;
// };
