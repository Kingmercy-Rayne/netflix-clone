<template>
  <div class="search-container">
    <i class="fa fas fa-search"></i>
    <input type="search" name="searchMovies" class="search-input" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.search-container {
  display: flex;
  align-items: center;
  padding: 0.1em 0.3em;
  border: solid thin var(--border-color--primary);
  border-radius: 0.7em;

  i {
    // border: solid thin purple;
    padding: 0.4em;
    cursor: pointer;
  }

  .search-input {
    padding: 0.4em;
    font-size: 0.8rem;
    border: none;
    outline: none;
  }
}
</style>
