module.exports = (app) => {
  const beer = require('../controllers/beer.controller.js');

  var router = require('express').Router();

  router.get('/:name', beer.findByName);

  // router.put('/:id', budgets.addRating);

  app.use('/api/beer', router);
};
