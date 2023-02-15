<template>
  <div class="container">
    <div class="row">
      <h1>Fiskbutiken</h1>
    </div>
    <div class="align-items-stretch d-flex flex-wrap justify-content-between">
      <div
        class="card d-flex"
        :key="fish.id"
        v-for="fish in fishList"
        style="width: 18rem"
      >
        <img class="card-img-top" :src="fish.image.src" :alt="fish.image.alt" />
        <div class="card-body">
          <h2 class="card-title">{{ fish.name }}</h2>
          <hr />
          <p class="card-text">Pris: {{ fish.price }}kr</p>
          <p class="card-text">Tillgång: {{ fish.amount }}st</p>
        </div>
        <div class="align-self-end button-group d-flex justify-content-between">
          <button
            @click="$store.commit('store/removeFish', fish.id)"
            class="btn btn-danger"
          >
            Ta bort
          </button>
          <button
            @click="$store.commit('store/addFish', fish)"
            class="btn btn-success"
          >
            Lägg till
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        fishList: 'catchedFish/catchedFish',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .button-group {
    width: 100%;
  }
  .card {
    padding: 16px 24px;
  }
</style>
