const state = () => ({
  beers: [],
  isBeersLoading: false,
});

const getters = {
  isBeersLoading: (state) => state.isBeersLoading,
  beers: (state) => state.beers,
};

const actions = {
  findBeers({ commit }, name) {
    commit('setIsBeersLoading', true);
    BeerRatingService.findBeers(name, (beers) => {
      commit('setBeers', beers);
      commit('setIsBeersLoading', false);
    });
  },
};

const mutations = {
  setBeers(state, beers) {
    state.beers = beers;
  },
  setIsBeersLoading(state, isBeersLoading) {
    state.isBeersLoading = isBeersLoading;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
