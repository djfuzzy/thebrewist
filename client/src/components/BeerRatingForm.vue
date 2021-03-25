<template>
  <div class="beer-rating-form">
    <h4>Enter a rating for this beer:</h4>
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-select
          id="ratingInput"
          v-model="form.rating"
          required
          :options="options"
        ></b-form-select>
      </b-form-group>
      <b-form-group>
        <b-form-input
          id="emailInput"
          v-model="form.email"
          placeholder="Enter your email address"
          required
          type="email"
        />
      </b-form-group>
      <b-form-group>
        <b-form-textarea
          id="commentInput"
          v-model="form.comments"
          placeholder="Enter any comments"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Save</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      form: {
        rating: null,
        email: '',
        comments: '',
      },
      options: [
        { value: null, text: 'Select a rating' },
        { value: 1, text: '1 - Poor' },
        { value: 2, text: '2 - Fair' },
        { value: 3, text: '3 - Good' },
        { value: 4, text: '4 - Very Good' },
        { value: 5, text: '5 - Excellent' },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch('beerRatings/add', { id: this.id, data: this.form });
      this.form = { rating: null, email: '', comments: '' };
    },
  },
};
</script>

<style scoped lang="scss">
.beer-rating-form {
  text-align: center;
  max-width: 400px;
  margin: 2rem auto;
}
</style>
