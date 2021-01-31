const { expect } = require('@jest/globals');
const requestLogDb = require('../utilities/db-helper').loadRequestLogDb;
const userLogger = require('./user-logger');

const mockReq = (email, path, method) => ({
  get: jest.fn().mockReturnValue(email),
  path,
  method,
});

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

const mockNext = () => jest.fn();

const errorMessage = 'A valid email was not set for x-user';

test('no email address for POST to /api/ratings returns 500 error with message', () => {
  const mockedReq = mockReq(undefined, '/api/beer/ratings/123', 'POST');
  const mockedRes = mockRes();
  const mockedNext = mockNext();

  userLogger(mockedReq, mockedRes, mockedNext);

  expect(mockedRes.status).toHaveBeenCalledWith(500);
  expect(mockedRes.send).toHaveBeenCalledWith(errorMessage);
});

test('no email address for GET to /api/ratings logs request and passes control', () => {
  const dbInsertSpy = jest.spyOn(requestLogDb, 'insert');
  const mockedReq = mockReq(undefined, '/api/beer/ratings/123', 'GET');
  const mockedRes = mockRes();
  const mockedNext = mockNext();

  userLogger(mockedReq, mockedRes, mockedNext);

  expect(dbInsertSpy).toHaveBeenCalled();
  expect(mockedNext).toHaveBeenCalledTimes(1);
});

test('no email address for GET to /api/:name logs request and passes control', () => {
  const dbInsertSpy = jest.spyOn(requestLogDb, 'insert');
  const mockedReq = mockReq(undefined, '/api/beer/Weiss', 'GET');
  const mockedRes = mockRes();
  const mockedNext = mockNext();

  userLogger(mockedReq, mockedRes, mockedNext);

  expect(dbInsertSpy).toHaveBeenCalled();
  expect(mockedNext).toHaveBeenCalledTimes(1);
});

test('valid email address for POST to /api/ratings logs request and passes control', () => {
  const dbInsertSpy = jest.spyOn(requestLogDb, 'insert');
  const mockedReq = mockReq('valid@email.com', '/api/beer/ratings/123', 'POST');
  const mockedRes = mockRes();
  const mockedNext = mockNext();

  userLogger(mockedReq, mockedRes, mockedNext);

  expect(dbInsertSpy).toHaveBeenCalled();
  expect(mockedNext).toHaveBeenCalledTimes(1);
});
