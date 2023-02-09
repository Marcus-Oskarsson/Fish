<template>
  <article>
    <h2>{{ fish.name }}</h2>
    <img :src="fish.image.src" :alt="fish.image.alt" />
    {{ removeTags(fish.biology) }}
  </article>
</template>

<script>
  export default {
    emits: {
      closeModal: 'closeModal'
    },
    created() {
      // this.closeModal()
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
    },
    watch: {
      // Kan kolla om man klickar utanför
    }
  }
</script>

<style lang="scss" scoped></style>
