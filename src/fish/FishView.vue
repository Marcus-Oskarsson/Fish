<template>
  <!-- <div> -->
  <div class="row .mx-0 max-height">
    <FishModal
      @close-modal="closeModal"
      v-if="isModalOpen && selected"
      :fish="selected"
    />

    <!-- <aside class="col-sm-3 col-12 overflow-scroll">
      <h2>Fiskar</h2>
      <div v-for="fish in catchedFish" :key="fish.id">
        <p>{{ fish.name }}</p>
        <img
          :src="fish?.image?.src"
          :alt="fish?.image?.alt"
          class="small-fish-img"
        />
        <button @click="openModal(fish)" type="button">Läs mer</button>
      </div>
      <RouterLink
        :key="fish.id"
        v-for="fish in fishes"
        :to="`/fish/${fish.id}`"
      />
    </aside> -->
    <section class="col position-relative" :style="cssImageProps">
      <input
        @click="goFish"
        class="btn btn-lg btn-success position-absolute top-50 start-50 translate-middle"
        type="button"
        value="Kasta!"
      />
    </section>
  </div>
  <!-- </div> -->
</template>

<script>
  import { mapGetters } from 'vuex'
  import { useToast } from 'vue-toastification'

  import FishModal from './FishModal.vue'

  import image from '../images/fish.jpg'

  export default {
    components: {
      FishModal
    },
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
      // this.sendNotification('Du fick napp!.. En Abborre!')
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
        selected: null
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
          console.log('du fångade en: ', this.fishes[fishId])
          this.$store.commit('catchedFish/addFish', this.fishes[fishId])
        } else {
          this.sendNotification('Inget napp...', 3000)
        }
      },
      getFish() {
        this.$store.dispatch('populateFish/populatePond')
      },
      goFish() {
        const time = Math.floor(Math.random() * 8) * 1000 + 2
        this.sendNotification('Du metar en stund från bryggan...', time)
        setTimeout(this.fishing, time)
      },
      isFishCought() {
        return Math.ceil(Math.random() * 2) > 1
      },
      openModal(fish) {
        this.isModalOpen = true
        this.selected = fish
      },
      sendNotification(text, duration = 2500) {
        this.toast.success(`${text}`, {
          showCloseButtonOnHover: false,
          icon: false,
          timeout: duration
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .max-height {
    min-height: 100vh;
  }
  .small-fish-img {
    width: 75px;
  }
</style>
