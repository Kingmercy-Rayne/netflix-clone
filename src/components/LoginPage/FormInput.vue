<template>
  <div class="form-input">
    <label for="Email">{{ input }}</label>
    <input :type="input" autocomplete />
  </div>
</template>

<script>
export default {
  props: ['input'],
};
</script>

<style lang="stylus" scoped>
.form-input {
  min-height: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 0 0.2em 0;

  label {
    // padding: 0.5em 0;
    text-transform: capitalize;
  }

  input {
    padding: 0.3em 0;
    margin-bottom: 1em;
    border: none;
    background: none;
    border-bottom: solid thin #999;
    padding-right: 2em;
    color: var(--text-color--alt);
  }
}
</style>
