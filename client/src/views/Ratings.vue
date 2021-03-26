<template>
  <div class="ratings">
    <b-link href="/">Go back to home</b-link>
    <h2>Ratings for {{ this.name }}</h2>
    <BeerRatingForm :id="id" @beer-rating-saving="beerRatingSaving" />
    <BeerRatingsList
      :isLoading="this.$store.getters['beerRatings/isBeerRatingsLoading']"
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
  data() {
    return { name: '' };
  },
  created() {
    this.name = this.$store.getters['beerRatings/getSelectedBeerName'];
    this.$store.dispatch('beerRatings/getById', this.id);
  },
  methods: {
    beerRatingSaving(beerRating) {
      this.$store.dispatch('beerRatings/add', {
        id: this.id,
        data: beerRating,
      });
    },
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
