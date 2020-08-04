<template>
  <div class="the-navbar" v-if="1">
    <perfect-scrollbar>
      <The-Logo :dark="1" />
      <div class="nav-row">
        <span class="nav-row__item">Profile</span>
        <span class="nav-row__item">Settings</span>
        <span class="nav-row__item">Favorites</span>
      </div>
      <Profile-Bar />
      <Nav-List />
      <Nav-List-Alt />
    </perfect-scrollbar>
  </div>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar';
import TheLogo from '@/components/TheLogo.vue';
import ProfileBar from '@/components/TheNavbar/ProfileBar.vue';
import NavList from '@/components/TheNavbar/NavList.vue';
import NavListAlt from '@/components/TheNavbar/NavListAlt.vue';

export default {
  components: {
    PerfectScrollbar,
    ProfileBar,
    NavList,
    NavListAlt,
    TheLogo,
  },
};
</script>

<style lang="stylus" scoped>
.ps {
  width: 100%;
  padding: 0 1em;
}

.the-navbar {
  position: relative;
  z-index: 10;
  width: 30%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // padding: 0 1em;
  overflow-y: hidden;

  // border: solid thin red;
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
