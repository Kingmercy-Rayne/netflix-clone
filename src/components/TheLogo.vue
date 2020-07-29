<template>
  <div v-if="this.dark" class="the__logo--dark">strad <span>.</span></div>
  <div class="the__logo" v-else>Netflix <span>.</span></div>
</template>

<script>
export default {
  name: 'TheLogo',
  props: ['dark'],
};
</script>

<style lang="stylus" scoped>
.the__logo {
  // border: solid thin crimson;
  color: var(--text-color--alt);
  font-size: 2rem;
  font-weight: 600;
  font-family: var(--font-family--alt);
  text-transform: uppercase;
}

.the__logo--dark {
  // border: solid thin crimson;
  color: var(--text-color--primary);
  font-size: 2rem;
  font-weight: 600;
  font-family: var(--font-family--alt);
  text-transform: uppercase;

  span {
    color: var(--text-color--tri);
  }
}
</style>
