<template>
  <div class="discover-page">
    <View-Header />
    <Movie-Listing />
  </div>
</template>

<script>
import ViewHeader from '@/components/ViewHeader.vue';
import MovieListing from '@/components/MovieListing.vue';

export default {
  components: {
    ViewHeader,
    MovieListing,
  },
};
</script>

<style lang="stylus" scoped>
.discover-page {
  width: 100%;
  min-height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;
  border: solid thin green;
}
</style>
