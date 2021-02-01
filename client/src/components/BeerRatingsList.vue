<template>
  <div class="beer-ratings-list">
    <h3>Ratings for this beer:</h3>
    <b-table
      striped
      :items="items"
      :fields="fields"
      :hidden="items.length === 0"
    ></b-table>
    <div v-if="items.length === 0">
      There are no ratings for this beer yet.
    </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      fields: ['rating', 'comments'],
    };
  },
};
</script>
