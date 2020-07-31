<template>
  <div class="discover-page">
    <View-Header />
  </div>
</template>

<script>
import ViewHeader from '@/components/ViewHeader.vue';

export default {
  components: {
    ViewHeader,
  },
};
</script>

<style lang="stylus" scoped>
.discover-page {
  width: 100%;
  min-height: 100vh;
  flex-grow: 1;
  position: relative;
  z-index: 5;
  border: solid thin green;
}
</style>
