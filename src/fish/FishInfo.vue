<template>
  <div>
    TEST
    <pre>{{ fish }}</pre>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        getFishById: 'populateFish/getFishById'
      })
    },
    created() {
      const id = this.$route.params.id
      this.fish = this.getFishById(id)
      console.log('fish in: ', this.fish)
    },
    data() {
      return {
        fish: {}
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped></style>
