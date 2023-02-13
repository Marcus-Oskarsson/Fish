<template>
  <section class="col position-relative" :style="cssImageProps">
    <input
      @click="goFish"
      class="btn btn-lg btn-success position-absolute top-50 start-50 translate-middle"
      type="button"
      value="Kasta!"
      :disabled="!isReady"
    />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { useToast } from 'vue-toastification'

  // import FishModal from './FishModal.vue'

  import image from '../images/fish2.jpg'

  export default {
    computed: {
      ...mapGetters({
        fishes: 'populateFish/fishesObj', //namn på alla fiskar :)
        getFishById: 'populateFish/getFishById'
      }),
      fishNames() {
        return this.fishes.map((fish) => fish.name)
      },
      catchedFish() {
        return this.$store.state.catchedFish.catchedFish
      }
    },
    created() {
      this.getFish()
      this.toast = useToast()
    },
    data() {
      return {
        cssImageProps: {
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        },
        isModalOpen: false,
        selected: null,
        isReady: true
      }
    },
    methods: {
      closeModal() {
        this.isModalOpen = false
      },
      fishing() {
        if (this.isFishCought()) {
          // TODO bryt ut. Vore ju enkelt med en game-instans?
          const fishId = Math.floor(Math.random() * this.fishes.length)
          const fish = this.fishNames[fishId]
          this.sendNotification(`Du fångade en ${fish}`, 3000)
          this.$store.commit('catchedFish/addFish', this.fishes[fishId])
        } else {
          this.sendNotification('Inget napp...', 3000)
        }
        this.isReady = true
      },
      getFish() {
        this.$store.dispatch('populateFish/populatePond')
      },
      goFish() {
        if (this.isReady) {
          const time = Math.floor(Math.random() * 5) * 1000 + 2
          this.sendNotification('Du metar en stund från bryggan...', time)
          this.isReady = false
          setTimeout(this.fishing, time)
        }
      },
      isFishCought() {
        return Math.ceil(Math.random() * 3) > 1
      },
      sendNotification(text, duration = 2500) {
        this.toast.success(`${text}`, {
          timeout: duration
        })
      }
    },
    watch: {
      // TODO Kolla om anv. klickar på speciell -> Fiska!
    }
  }
</script>

<style lang="scss" scoped>
  section {
    // https://cssgenerator.org/box-shadow-css-generator.html
    box-shadow: 8px 0px 8px 0px rgba(223, 219, 219, 0.75) inset;
    -webkit-box-shadow: 8px 0px 8px 0px rgba(223, 219, 219, 0.75) inset;
    -moz-box-shadow: 8px 0px 8px 0px rgba(223, 219, 219, 0.75) inset;
  }
  .max-height {
    min-height: 100vh;
  }
  .small-fish-img {
    width: 75px;
  }
</style>
