<template>
  <div class="search-form">
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-input
          id="searhInput"
          v-model="searchTerms"
          placeholder="Enter the full or partial name of a beer"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Search</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerms: '',
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch('beerRatings/findBeers', this.searchTerms);
    },
  },
};
</script>

<style scoped lang="scss">
.search-form {
  max-width: 400px;
  margin: 0 auto 1rem;
}
</style>
