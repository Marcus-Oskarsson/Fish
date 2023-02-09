<template>
  <div class="container-fluid main image" :style="cssImageProps">
    <!-- <div
    class="container-fluid main image"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  > -->
    <!-- <img :src="backgroundImage" alt="asd" /> -->
    <RouterLink class="btn btn-lg btn-success link" to="/fish">
      Fiska!
    </RouterLink>
  </div>
</template>

<script>
  import image from '../images/background-startpage.png'

  export default {
    data() {
      return {
        cssImageProps: {
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    min-height: 100vh;
  }

  .main {
    .link {
      margin: auto;
    }
  }
</style>
