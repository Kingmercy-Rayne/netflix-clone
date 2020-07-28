<template>
  <div class="the-navbar" v-if="1">
    <The-Logo :dark="1" />
    <div class="nav-row">
      <span class="nav-row__item">Profile</span>
      <span class="nav-row__item">Settings</span>
      <span class="nav-row__item">Favorites</span>
    </div>
    <Profile-Bar />
  </div>
</template>

<script>
import TheLogo from '@/components/TheLogo.vue';
import ProfileBar from '@/components/TheNavbar/ProfileBar.vue';

export default {
  components: {
    ProfileBar,
    TheLogo,
  },
};
</script>

<style lang="stylus" scoped>
.the-navbar {
  position: relative;
  z-index: 10;
  border: solid thin red;
  width: 30%;
  min-height: 100vh;

  .nav-row {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 2em 0;

    .nav-row__item {
      font-weight: 600;
      font-size: 0.8rem;
    }
  }
}
</style>
