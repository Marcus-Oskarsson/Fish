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
      <button class="btn btn-lg btn-primary col-12 link" type="submit">
        Börja fiska!
      </button>
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
        timer: null,
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
        if (this.timer) clearTimeout(this.timer)
        this.typing = newName && newName !== oldName
        this.timer = setTimeout(() => {
          this.typing = false
        }, 3000)
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
  p,
  .btn,
  .btn:hover,
  .btn:focus {
    color: $light;
  }
</style>
