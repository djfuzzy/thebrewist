import BeerRatingService from '../../services/beerRatingService.js';

const state = () => ({
  isSearchResultsLoading: false,
  searchResults: [],
  selectedBeer: undefined,
  isBeerRatingsLoading: false,
  selectedBeerRatings: [],
});

const getters = {
  isSearchResultsLoading: state => state.isSearchResultsLoading,
  selectedBeerRatings: state => state.selectedBeerRatings,
  selectedBeer: state => state.selectedBeer,
  isBeerRatingsLoading: state => state.isBeerRatingsLoading,
  searchResults: state => state.searchResults,
  getSelectedBeerName: state => state.selectedBeer?.name,
};

const actions = {
  findBeers({ commit }, name) {
    commit('setIsSearchResultsLoading', true);
    BeerRatingService.findBeers(name, searchResults => {
      commit('setSearchResults', searchResults);
      commit('setIsSearchResultsLoading', false);
    });
  },
  selectBeer({ commit }, beer) {
    commit('setSelectedBeer', beer);
  },
  getById({ commit }, id) {
    commit('setIsBeerRatingsLoading', true);
    BeerRatingService.getBeerRatingsById(id, beerRatings => {
      commit('setSelectedBeerRatings', beerRatings);
      commit('setIsBeerRatingsLoading', false);
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
  setIsSearchResultsLoading(state, isLoading) {
    state.isSearchResultsLoading = isLoading;
  },
  setSearchResults(state, searchResults) {
    state.searchResults = searchResults;
  },
  setSelectedBeer(state, beer) {
    state.selectedBeer = beer;
  },
  setIsBeerRatingsLoading(state, isLoading) {
    state.isBeerRatingsLoading = isLoading;
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
