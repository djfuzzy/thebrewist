import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const cacheConfig = {
  enabledByDefault: false,
  cacheFlag: 'useCache',
};

const HttpClient = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 30000,
  headers: {
    'Cache-Control': 'no-cache',
  },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig),
});

export default HttpClient;
