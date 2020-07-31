<template>
  <li class="nav-list-item">
    <span class="active-nav-identifier">
      <i class="fa fas fa-minus" v-if="0"></i>
    </span>
    <!-- determine which text style to serve based on prop  -->
    <h5 v-if="!this.isAlt">{{ title }}</h5>
    <span v-else>{{ title }}</span>
  </li>
</template>

<script>
export default {
  props: ['title', 'route', 'isAlt'],
  //   add comparison for route and present list-item.....
  //    to determine active route
};
</script>

<style lang="stylus" scoped>
.nav-list-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.2em 0;
  margin: 0.3em 0;
  color: var(--text-color--primary);

  .active-nav-identifier {
    // padding: 0 0.5em;
    color: var(--text-color--tri);
    min-width: 2rem;
    text-align: center;
  }

  span {
    font-weight: 400;
    font-size: 0.7rem;
    padding: 0.1em 0;
    margin: 0;
  }
}
</style>
