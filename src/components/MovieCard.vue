<template>
  <div class="movie-card">
    <img src="@/assets/img/anders-jilden-AkUR27wtaxs-unsplash.jpg" alt="" class="movie-card__img" />
    <p class="movie-card__details">
      <span class="movie-card__title">Deadpool</span>
      <span class="movie-card__rating">40 xp</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.movie-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0;

  .movie-card__img {
    // width: 3em;
    // height: 3em;
  }

  .movie-card__details {
    display: flex;
    flex-direction: column;
    align-items: center;

    .movie-card__title {
      font-size: 0.9rem;
      color: var(--font-color--primary);
    }

    .movie-card__rating {
      font-size: 0.8rem;
      color: var(--text-color--tri);
    }
  }
}
</style>
