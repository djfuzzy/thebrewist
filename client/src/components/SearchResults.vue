<template>
  <div class="search-results">
    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
      :hidden="items.length === 0"
      @row-clicked="selectBeer"
    ></b-table>
  </div>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return { fields: ['name', 'description', 'first_brewed', 'food_pairing'] };
  },
  methods: {
    selectBeer(item) {
      this.$router.push({ name: 'Ratings', params: { id: item.id } });
    },
  },
};
</script>
