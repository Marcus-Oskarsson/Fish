<template>
  <div class="overlay">
    <article @focusout="closeModal" tabindex="0" ref="modal">
      <div class="card">
        <img class="card-img-top" :src="fish.image.src" :alt="fish.image.alt" />
        <div class="card-body">
          <h2 class="card-title">{{ fish.name }}</h2>
          <p class="card-text">{{ removeTags(fish.biology) }}</p>
        </div>
      </div>
    </article>
    <!-- <article @focusout="closeModal" tabindex="0" ref="modal">
      <h2>{{ fish.name }}</h2>
      <img :src="fish.image.src" :alt="fish.image.alt" />
      <p>{{ removeTags(fish.biology) }}</p>
    </article> -->
  </div>
</template>

<script>
  export default {
    emits: {
      closeModal: 'closeModal'
    },
    mounted() {
      this.$refs.modal.focus()
    },
    props: {
      fish: {
        type: Object,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit('closeModal')
      },
      // Hämtade från https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/
      removeTags(str) {
        if (str === null || str === '') return false
        else str = str.toString()
        return str.replace(/(<([^>]+)>)/gi, '')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/main.scss';

  .overlay {
    position: absolute;
    width: 100vw;
    min-height: calc(10rem + 100vh);
    background-color: #010101bb;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  article {
    background-color: $light;
    position: absolute;
    top: calc(10rem);
    left: calc(50%);
    transform: translate(-50%, 0);
    width: 50%;
    z-index: 2;
    padding: 16px;
  }

  // img {
  //   width: 175px;
  //   height: 175px;
  //   max-width: 100%;
  // }
</style>
