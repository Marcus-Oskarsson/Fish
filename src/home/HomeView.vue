<template>
  <div class="container-fluid main image" :style="cssImageProps">
    <form @submit.prevent="navigate">
      <label for="name">Ditt namn:</label>
      <input
        class="form-control"
        id="name"
        placeholder="Santiago"
        required
        type="text"
        v-model="name"
      />
      <p class="font-italic" v-if="typing">Skriver...</p>
      <button class="btn btn-lg btn-success col-12 link" type="submit">
        Börja fiska!
      </button>
      <!-- <RouterLink class="btn btn-lg btn-primary col-12 link" to="/fish">
        Kasta loss
      </RouterLink> -->
    </form>
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
        },
        name: null,
        typing: false
      }
    },
    methods: {
      navigate() {
        this.$store.commit('user/addUser', this.name)
        this.$router.push('/fish')
      }
    },
    watch: {
      name(newName, oldName) {
        this.typing = newName && newName !== oldName
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/main.scss';
  .main {
    display: flex;
    min-height: 100vh;
  }

  .main {
    form {
      background-color: #010101aa;
      margin: auto;
      padding: 48px 36px;

      *:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }

  label,
  p {
    color: $light;
  }
</style>
