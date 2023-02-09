<template>
  <aside class="col-sm-3 col-12 overflow-scroll">
    <pre>
      {{ lastTenFishList }}
    </pre>
  </aside>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        lastTenFishList: 'catchedFish/lastTenFish'
      })
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped></style>
