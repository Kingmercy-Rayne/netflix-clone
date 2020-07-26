<template>
  <div class="the__logo">Netflix <span>.</span></div>
</template>

<script>
export default {
  name: 'TheLogo',
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
</style>
