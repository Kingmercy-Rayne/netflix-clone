<template>
  <div class="login-overlay" v-if="1" v-on-clickaway="closeLoginOverlay">
    <h2>Login</h2>
    <form action="/">
      <Form-Input input="email" />
      <Form-Input input="password" />
      <span class="forgot-password">Forgot username or password ?</span>
      <button type="submit">Login</button>
    </form>
    <Remember-Me />
    <i class="social-login fas fa fa-google-plus"></i>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import FormInput from '@/components/LoginPage/FormInput.vue';
import RememberMe from '@/components/LoginPage/RememberMe.vue';

export default {
  mixins: [clickaway],
  components: {
    FormInput,
    RememberMe,
  },
  methods: {
    closeLoginOverlay() {
      this.$emit('closeLoginOverlay', 1);
    },
  },
};
</script>

<style lang="stylus" scoped>
.login-overlay {
  position: absolute;
  z-index: 15;
  top: 0;
  right: 0;
  bottom: 0;
  // left: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10%;
  padding-right: 14%;
  font-family: var(--font-family--alt);
  background: rgba(19, 18, 22, 0.75);
  border: none;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(10px);
    z-index: -100;
  }

  h2 {
    margin-bottom: 2.5em;
    font-weight: 600;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .forgot-password {
    cursor: pointer;
    font-weight: 400;
    font-size: 0.8rem;
    opacity: 0.7;
    padding: 0.4em 0;
  }

  button[type='submit'] {
    align-self: stretch;
  }

  .social-login {
    align-self: center;
    margin: 1em;
    padding: 0.8em;
    color: var(--text-color--alt);
    background: rgba(223, 73, 48, 1);
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
