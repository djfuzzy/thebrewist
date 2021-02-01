import BeerRatingService from '../../services/beerRatingService.js';

const state = () => ({
  searchResults: [],
  selectedBeerRatings: [],
});

const getters = {
  selectedBeerRatings: state => state.selectedBeerRatings,
  searchResults: state => state.searchResults,
};

const actions = {
  findBeers({ commit }, name) {
    BeerRatingService.findBeers(name, searchResults => {
      commit('setSearchResults', searchResults);
    });
  },
  getById({ commit }, id) {
    BeerRatingService.getBeerRatingsById(id, beerRatings => {
      commit('setSelectedBeerRatings', beerRatings);
    });
  },
  add({ commit }, { id, data }) {
    BeerRatingService.addBeerRating(
      id,
      data.email,
      { rating: data.rating, comments: data.comments },
      beerRatings => {
        commit('setSelectedBeerRatings', beerRatings);
      },
    );
  },
};

const mutations = {
  setSearchResults(state, searchResults) {
    state.searchResults = searchResults;
  },
  setSelectedBeerRatings(state, selectedBeerRatings) {
    state.selectedBeerRatings = selectedBeerRatings;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
