<template>
  <div class="ratings">
    <b-link href="/">Go back to home</b-link>
    <h2>Ratings for Beer with Id {{ id }}</h2>
    <BeerRatingForm :id="id" />
    <BeerRatingsList
      :items="this.$store.getters['beerRatings/selectedBeerRatings']"
    />
  </div>
</template>

<script>
import BeerRatingForm from '@/components/BeerRatingForm.vue';
import BeerRatingsList from '@/components/BeerRatingsList.vue';

export default {
  components: {
    BeerRatingForm,
    BeerRatingsList,
  },
  props: ['id'],
  created() {
    this.$store.dispatch('beerRatings/getById', this.id);
  },
};
</script>

<style scoped lang="scss">
.ratings {
  padding-top: 3rem;
}

h2 {
  margin-top: 1rem;
}
</style>
