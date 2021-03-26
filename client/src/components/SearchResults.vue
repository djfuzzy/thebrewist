<template>
  <div class="search-results">
    <b-table
      striped
      hover
      :busy="isLoading"
      :items="items"
      :fields="fields"
      :hidden="items.length === 0"
      @row-clicked="selectBeer"
    >
      <template #table-busy>
        <LoadingSpinner />
      </template>
    </b-table>
  </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';

export default {
  components: {
    LoadingSpinner,
  },
  props: ['items', 'isLoading'],
  data() {
    return { fields: ['name', 'description', 'first_brewed', 'food_pairing'] };
  },
  methods: {
    selectBeer(item) {
      this.$emit('beer-selected', item);
    },
  },
};
</script>
