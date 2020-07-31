<template>
  <ul class="nav-list">
    <Nav-List-Item v-for="(item, index) in navRoutes" :key="index" :title="item.title" isAlt="1" />
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
        { title: 'chat', path: 'chat' },
        { title: 'my friends', path: 'friends' },
        { title: 'add new', path: 'add_new' },
        { title: 'manage friend list', path: 'manage_friend_list' },
        { title: 'Logout', path: 'logout' },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.nav-list {
  width: 100%;
  min-height: 10em;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0.2em 0;
  text-align: start;
}
</style>
