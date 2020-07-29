<template>
  <div class="the-navbar" v-if="1">
    <The-Logo :dark="1" />
    <div class="nav-row">
      <span class="nav-row__item">Profile</span>
      <span class="nav-row__item">Settings</span>
      <span class="nav-row__item">Favorites</span>
    </div>
    <Profile-Bar />
    <Nav-List />
  </div>
</template>

<script>
import TheLogo from '@/components/TheLogo.vue';
import ProfileBar from '@/components/TheNavbar/ProfileBar.vue';
import NavList from '@/components/TheNavbar/NavList.vue';

export default {
  components: {
    ProfileBar,
    NavList,
    TheLogo,
  },
};
</script>

<style lang="stylus" scoped>
.the-navbar {
  position: relative;
  z-index: 10;
  width: 30%;
  min-height: 100vh;
  padding: 0 1em;
  border: solid thin red;

  .nav-row {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1.5em 0;

    .nav-row__item {
      font-weight: 600;
      font-size: 0.8rem;
    }
  }
}
</style>
