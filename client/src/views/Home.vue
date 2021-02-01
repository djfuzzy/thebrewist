<template>
  <div class="home">
    <Intro />
    <SearchForm />
    <SearchResults :items="this.$store.getters['beerRatings/searchResults']" />
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
};
</script>
