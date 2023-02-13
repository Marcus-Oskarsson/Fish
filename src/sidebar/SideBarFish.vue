<template>
  <aside class="col-sm-2 col-12 overflow-scroll">
    <h2>Fiskar</h2>
    <!-- <pre>
      {{ lastTenFishList }}
    </pre> -->
    <div class="fish-content" v-for="fish in lastTenFishList" :key="fish.id">
      <p>{{ fish.name }}</p>
      <img
        :src="fish?.image?.src"
        :alt="fish?.image?.alt"
        class="small-fish-img"
      />
      <button class="btn" @click="openModal(fish)" type="button">
        Läs mer
      </button>
    </div>
  </aside>
  <FishModal
    @close-modal="closeModal"
    v-if="isModalOpen && selected"
    :fish="selected"
  />
</template>

<script>
  import { mapGetters } from 'vuex'

  import FishModal from '../fish/FishModal.vue'

  export default {
    components: {
      FishModal
    },
    computed: {
      ...mapGetters({
        lastTenFishList: 'catchedFish/lastTenFish'
      })
    },
    data() {
      return {
        isModalOpen: false,
        selected: null
      }
    },
    methods: {
      closeModal() {
        this.isModalOpen = false
      },
      openModal(fish) {
        this.isModalOpen = true
        this.selected = fish
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/main.scss';

  aside {
    background-color: rgb(48, 75, 148);
    padding: 24px 16px;
  }

  .fish-content {
    margin-bottom: 16px;
  }

  h2,
  p {
    color: $light;
  }
  .small-fish-img {
    width: 75px;
  }
</style>
