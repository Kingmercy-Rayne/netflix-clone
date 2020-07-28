<template>
  <div id="app">
    <The-Navbar />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style lang="stylus">
#app {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: stretch;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color--primary);
}
</style>
