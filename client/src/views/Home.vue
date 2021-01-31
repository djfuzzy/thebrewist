<template>
  <div class="home">
    <Intro />
    <SearchForm />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue';
import SearchForm from '@/components/SearchForm.vue';

export default {
  name: 'Home',
  components: {
    Intro,
    SearchForm,
  },
};
</script>
