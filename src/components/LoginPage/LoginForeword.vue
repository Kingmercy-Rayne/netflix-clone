<template>
  <div class="login-foreword">
    <div class="foreword__container">
      <h2>Watch TV Shows & Movies Anytime, Anywhere</h2>
      <button>Start with a free month</button>
    </div>
    <div class="slide-controller" v-if="!this.overlay">
      <i class="slide-controller__ico fa fas fa-long-arrow-left"></i>
      <i class="slide-controller__ico fa fas fa-long-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['overlay'],
};
</script>

<style lang="stylus" scoped>
.login-foreword {
  align-self: flex-start;
  flex-grow: 3;
  width: 100%;
  min-height: 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6em 0;
  font-family: var(--font-family--primary);

  .foreword__container {
    width: 50%;
    font-size: 1.8rem;
    text-align: start;

    button {
      margin: 2em 0;
      background: var(--button-bg--alt);
      border: none;
    }
  }

  .slide-controller {
    // padding: 2em;
    // border: solid thin green;
    .slide-controller__ico {
      padding: 0.8em;
      margin: 0.5em;
      font-size: 1rem;
      border: solid 2px var(--border-color--primary);
      border-radius: 50%;
    }
  }
}
</style>
