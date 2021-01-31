import HttpClient from '../utilities/httpClient';

export default {
  async findBeers(name, cb) {
    let res = await HttpClient.get(`api/beer/${name}`);
    return cb(res.data);
  },
  async addBeerRating(id, beerRating, cb) {
    let res = await HttpClient.post(`api/beer/ratings/${id}`, beerRating);
    return cb(res.data);
  },
  async getBeerRatingsById(id, cb) {
    let res = await HttpClient.get(`api/beer/ratings/${id}`, {
      useCache: true,
    });
    return cb(res.data);
  },
};
