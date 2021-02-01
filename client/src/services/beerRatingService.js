import HttpClient from '../utilities/httpClient';

export default {
  async findBeers(name, cb) {
    let res = await HttpClient.get(`api/beer/${name}`);
    return cb(res.data);
  },
  async addBeerRating(id, email, beerRating, cb) {
    const httpClient = HttpClient;
    httpClient.defaults.headers.common['X-User'] = email;
    let res = await httpClient.post(`api/beer/ratings/${id}`, beerRating);
    return cb(res.data);
  },
  async getBeerRatingsById(id, cb) {
    let res = await HttpClient.get(`api/beer/ratings/${id}`, {
      useCache: true,
    });
    return cb(res.data);
  },
};
