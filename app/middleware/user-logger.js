const noSql = require('nosql');
const requestLogDb = noSql.load('./data/request-log.nosql');

module.exports = (request, response, next) => {
  const email = request.get('x-user');

  const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!EMAIL_REGEXP.test(email)) {
    response.status(500).send('A valid email was not set for x-user');
  } else {
    const logEntry = {
      date: new Date(),
      user: email,
      body: request.body,
    };
    console.log(logEntry);
    requestLogDb.insert(logEntry).callback((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('The log entry has been inserted.');
      }
    });
    next();
  }
};
