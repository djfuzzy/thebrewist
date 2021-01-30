module.exports = (app) => {
  const beer = require('../controllers/beer.controller.js');

  var router = require('express').Router();

  router.get('/:name', beer.findByName);

  router.post('/ratings/:id', beer.addRating);

  router.get('/ratings/:id', beer.findRatingsById);

  app.use('/api/beer', router);
};
