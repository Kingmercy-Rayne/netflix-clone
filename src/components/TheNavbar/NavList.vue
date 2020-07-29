<template>
  <ul class="nav-list">
    <Nav-List-Item v-for="(item, index) in navRoutes" :key="index" :title="item.title" />
  </ul>
</template>

<script>
import NavListItem from '@/components/TheNavbar/NavListItem.vue';

export default {
  components: {
    NavListItem,
  },
  data() {
    return {
      navRoutes: [
        { title: 'home', path: 'home' },
        { title: 'discover', path: 'discover' },
        { title: 'popular', path: 'popular' },
        { title: 'movies', path: 'movies' },
        { title: 'series', path: 'series' },
        { title: 'my list', path: 'my-list' },
        { title: 'achievements', path: 'achievements' },
        { title: 'levels and rewards', path: 'levels' },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.nav-list {
  width: 100%;
  min-height: 10em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 2em 0;
  text-align: start;
}
</style>
