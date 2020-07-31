<template>
  <div class="profile-bar">
    <img src="@/assets/img/cesar-rincon-XHVpWcr5grQ-unsplash.jpg" alt="" />

    <div class="profile-bar-details">
      <h4 class="profile-bar-details__name">Jack dorsey</h4>
      <h5 class="profile-bar-details__level">Level 5</h5>
      <h6 class="profile-bar-details__xp">+45 XP remaining</h6>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.profile-bar {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5em;
  margin: 0.2em 0;

  img {
    object-fit: cover;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  .profile-bar-details {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-left: 1em;
    text-align: start;

    & > * {
      /* add vertical padding to children elements */
      padding: 0.2em 0;
    }

    .profile-bar-details__name {
    }

    .profile-bar-details__level {
      color: var(--text-color--tri);
    }

    .profile-bar-details__xp {
    }
  }
}
</style>
