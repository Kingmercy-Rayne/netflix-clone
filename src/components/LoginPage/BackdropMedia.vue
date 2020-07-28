<template>
  <div class="backdrop__media">
    <img src="@/assets/img/anders-jilden-AkUR27wtaxs-unsplash.jpg" alt="" />
    <!-- <video autoplay muted loop>
      <source src="@/assets/vid/hobbit_trailer.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> -->
  </div>
</template>

<script>
export default {
  name: 'BackdropMedia',
};
</script>

<style lang="stylus" scoped>
.backdrop__media {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  filter: brightness(55%);
  overflow: hidden;

  img, video {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: fill;
  }

  videooo {
    position: absolute;
    top: -100px;
    left: -220px;
    width: 142%;
    transform: scale(1.2);
    // height;
  }
}
</style>
