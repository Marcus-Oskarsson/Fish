<template>
  <aside class="col-sm-2 col-12 overflow-scroll">
    <h2>Kundvagn</h2>
    <div class="fish-content" v-for="fish in fishList" :key="fish.id">
      <h3>{{ fish.name }}</h3>
      <div class="fish-shop-info d-flex flex-row justify-content-between">
        <img
          :src="fish?.image?.src"
          :alt="fish?.image?.alt"
          class="small-fish-img"
        />
        <ul class="">
          <li>Antal: {{ fish.selectedAmount }} st.</li>
          <li>Pris: {{ fish.price }} kr.</li>
          <li>Totalt: {{ fish.price * fish.selectedAmount }} kr.</li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    computed: {
      fishList() {
        return this.$store.state.store.selected;
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/main.scss';

  aside {
    background-color: rgb(48, 75, 148);
    padding: 24px 16px;
  }

  .fish-content {
    margin-bottom: 1 6px;
  }

  .fish-shop-info {
    padding: 0 24px;
  }

  h2,
  h3,
  p,
  li {
    color: $light;
  }

  ul {
    margin-top: 16px;
    padding: 0;
  }

  li {
    list-style: none;
    margin-bottom: 8px;
  }
  .small-fish-img {
    width: 75px;
    max-width: 100%;
    object-fit: contain;
  }
</style>
