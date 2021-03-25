<template>
  <div class="beer-ratings-list">
    <h3>Ratings for this beer:</h3>
    <b-table
      striped
      :busy="isLoading"
      :items="items"
      :fields="fields"
      :hidden="items.length === 0"
    >
      <template #table-busy>
        <LoadingSpinner />
      </template>
    </b-table>
    <div v-if="items.length === 0">
      There are no ratings for this beer yet.
    </div>
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
    return {
      fields: ['rating', 'comments'],
    };
  },
};
</script>
