const noSql = require('nosql');
const requestLogDb = noSql.load('./data/request-log.nosql');

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
exports.isValidEmail = (input) => EMAIL_REGEXP.test(input);

exports.middleware = (request, response, next) => {
  const email = request.get('x-user');

  if (!isValidEmail(email)) {
    response.status(500).send('A valid email was not set for x-user');
  } else {
    requestLogDb
      .insert({
        date: new Date(Date.now),
        user: email,
        body: request.body,
      })
      .callback((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('The log entry has been inserted.');
        }
      });
    next();
  }
};
