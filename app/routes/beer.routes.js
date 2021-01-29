module.exports = (app) => {
  const beer = require('../controllers/beer.controller.js');

  var router = require('express').Router();

  router.get('/:name', beer.findByName);

  router.put('/ratings/:id', beer.addRating);

  router.get('/ratings/:id', beer.findRatingById);

  app.use('/api/beer', router);
};
