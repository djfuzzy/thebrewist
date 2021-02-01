<template>
  <div class="intro">
    <img
      alt="Picture of belgian beers"
      src="../assets/beer-header.jpg"
      class="header-img"
    />

    <h1>Welcome to the Brewist!</h1>
    <p>
      Use this handy tool to search for and rate beer.<br />
      Uses the
      <a href="https://punkapi.com/" rel="noopener noreferrer" target="_blank"
        >Punk API</a
      >.
    </p>
    <h3>Start here:</h3>
  </div>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style scoped lang="scss">
.intro {
  text-align: center;
  margin-bottom: 1rem;
}

.header-img {
  width: 100%;
  max-width: 500px;
  margin: 3rem 0;
}
</style>
