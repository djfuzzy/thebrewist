const noSql = require('nosql');

exports.loadBeerRatingsDb = noSql.load('./data/beer-ratings.nosql');

exports.loadRequestLogDb = noSql.load('./data/request-log.nosql');
