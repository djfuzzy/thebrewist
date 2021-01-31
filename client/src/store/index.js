import Vue from 'vue';
import Vuex from 'vuex';
import beerRatings from './modules/beerRatings';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { beerRatings },
  strict: debug,
});
