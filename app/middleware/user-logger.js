const requestLogDb = require('../utilities/db-helper').loadRequestLogDb;

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = (request, response, next) => {
  const email = request.get('x-user');

  if (!EMAIL_REGEXP.test(email)) {
    response.status(500).send('A valid email was not set for x-user');
  } else {
    requestLogDb.insert({
      date: new Date(Date.now),
      user: email,
      body: request.body,
    });
    next();
  }
};
