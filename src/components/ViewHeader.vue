<template>
  <div class="view-header">
    <h2 class="view-header__title">Discover</h2>
    <V-Search />
  </div>
</template>

<script>
import VSearch from '@/components/VSearch.vue';

export default {
  props: ['title', 'showSearchbox'],
  components: {
    VSearch,
  },
};
</script>

<style lang="stylus" scoped>
.view-header {
  // border: solid thin green;
  width: 100%;
  min-height: 1em;
  display: flex;
  justify-content: space-between;
  padding: 1.5em 4em;

  .view-header__title {
  }
}
</style>
