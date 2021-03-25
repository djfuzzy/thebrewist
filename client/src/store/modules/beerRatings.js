import BeerRatingService from '../../services/beerRatingService.js';

const state = () => ({
  searchResults: [],
  selectedBeer: undefined,
  selectedBeerRatings: [],
});

const getters = {
  selectedBeerRatings: state => state.selectedBeerRatings,
  selectedBeer: state => state.selectedBeer,
  searchResults: state => state.searchResults,
  getSelectedBeerName: state => state.selectedBeer?.name,
};

const actions = {
  findBeers({ commit }, name) {
    BeerRatingService.findBeers(name, searchResults => {
      commit('setSearchResults', searchResults);
    });
  },
  selectBeer({ commit }, beer) {
    commit('setSelectedBeer', beer);
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
  setSelectedBeer(state, beer) {
    state.selectedBeer = beer;
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
