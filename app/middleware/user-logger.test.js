const { expect } = require('@jest/globals');
const userLogger = require('./user-logger');

test('email is invalid', () => {
  const email = 'invalid@email';

  const result = userLogger.isValidEmail(email);

  expect(result).toBe(false);
});

test('email is valid', () => {
  const email = 'valid@email.com';

  const result = userLogger.isValidEmail(email);

  expect(result).toBe(true);
});
