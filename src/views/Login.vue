<template>
  <div class="login-page">
    <!-- Login-content layered over Backdrop-Media -->
    <Backdrop-Media />
    <div class="login-content">
      <div class="login__nav">
        <the-logo />
        <div class="auth-notifier">
          <h4 @click="toggleLoginOverlayOpen">Login</h4>
          <span></span>
          <h6>Create a User</h6>
        </div>
      </div>
      <Login-Foreword />
      <Backdrop-Media-Title />
    </div>
    <Login-Overlay @closeLoginOverlay="toggleLoginOverlayOff" v-if="isOverlayEnabled" />
  </div>
</template>

<script>
import TheLogo from '@/components/TheLogo.vue';
import BackdropMedia from '@/components/LoginPage/BackdropMedia.vue';
import BackdropMediaTitle from '@/components/LoginPage/BackdropMediaTitle.vue';
import LoginForeword from '@/components/LoginPage/LoginForeword.vue';
import LoginOverlay from '@/components/LoginPage/LoginOverlay.vue';

export default {
  name: 'Login',
  components: {
    TheLogo,
    BackdropMedia,
    BackdropMediaTitle,
    LoginOverlay,
    LoginForeword,
  },
  data() {
    return {
      isOverlayEnabled: true,
    };
  },
  methods: {
    toggleLoginOverlayOff() {
      this.isOverlayEnabled = false;
    },
    toggleLoginOverlayOpen() {
      this.isOverlayEnabled = true;
    },
  },
};
</script>

<style lang="stylus" scoped>
.login-page {
  width: 100%;
  position: relative;
  z-index: 10;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color--alt);

  .login-content {
    width: 100%;
    min-height: 100vh;
    // border: solid thin green;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 8%;

    .login__nav {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 2em;

      .auth-notifier {
        // border: solid thin purple;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5em;

        & > *:not(span) {
          /* with span being the divider */
          padding: 0.5em;
          cursor: pointer;
        }

        span {
          position: relative;
          background: white;
          filter: brightness(45%);
          width: 0.07rem;
          height: 1rem;
          margin: 0 0.4em;
        }

        h6 {
          filter: brightness(85%);
        }
      }
    }
  }
}
</style>
