const requestLogDb = require('../utilities/db-helper').loadRequestLogDb;
const { expect } = require('@jest/globals');
const userLogger = require('./user-logger');

const mockReq = (email) => {
  const req = {};
  req.get = jest.fn().mockReturnValue(email);
  return req;
};

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

const mockedRes = mockRes();

const mockedNext = jest.fn();

const errorMessage = 'A valid email was not set for x-user';

test('no email address returns 500 error with message', () => {
  const mockedReq = mockReq(undefined);

  userLogger(mockedReq, mockedRes, mockedNext);

  expect(mockedRes.status).toHaveBeenCalledWith(500);
  expect(mockedRes.send).toHaveBeenCalledWith(errorMessage);
});

test('invalid email address returns 500 error with message', () => {
  const mockedReq = mockReq('invalid@email');

  userLogger(mockedReq, mockedRes, mockedNext);

  expect(mockedRes.status).toHaveBeenCalledWith(500);
  expect(mockedRes.send).toHaveBeenCalledWith(errorMessage);
});

test('valid email address logs request and passes control', () => {
  const dbInsertSpy = jest.spyOn(requestLogDb, 'insert');
  const mockedReq = mockReq('valid@email.com');

  userLogger(mockedReq, mockedRes, mockedNext);

  expect(dbInsertSpy).toHaveBeenCalled();
  expect(mockedNext.mock.calls.length).toBe(1);
});
