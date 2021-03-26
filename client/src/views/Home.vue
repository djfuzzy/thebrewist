<template>
  <div class="home">
    <Intro />
    <SearchForm @search-terms-changed="searchTermsChanged" />
    <SearchResults
      :isLoading="this.$store.getters['beerRatings/isSearchResultsLoading']"
      :items="this.$store.getters['beerRatings/searchResults']"
      @beer-selected="beerSelected"
    />
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue';
import SearchForm from '@/components/SearchForm.vue';
import SearchResults from '@/components/SearchResults.vue';

export default {
  components: {
    Intro,
    SearchForm,
    SearchResults,
  },
  methods: {
    searchTermsChanged(searchTerms) {
      this.$store.dispatch('beerRatings/findBeers', searchTerms);
    },
    beerSelected(item) {
      this.$store.dispatch('beerRatings/selectBeer', item);
      this.$router.push({ name: 'Ratings', params: { id: item.id } });
    },
  },
};
</script>
