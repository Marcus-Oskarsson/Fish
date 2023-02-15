<template>
  <img
    @click="onClick"
    alt="Flöte - Klicka här för att meta"
    class="float"
    ref="float"
    src="../images/fishing-float.png"
    title="Klicka här för att meta!"
    v-show="isReady"
  />
</template>

<script>
  export default {
    data() {
      return {
        heightMax: null,
        heightMin: 0,
        widthMax: null,
        widthMin: 0,
        currentX: 0,
        currentY: 0,
        movementX: 1,
        movementY: 1,
        cssPositionProps: {
          left: `${this.currentX}px`,
          top: `${this.currentY}px`,
        },
        xInterval: null,
        yInterval: null,
      };
    },
    emits: {
      onClick: 'onClick',
    },
    methods: {
      onClick() {
        if (this.isReady) {
          this.currentY = Math.floor(Math.random() * this.heightMax);
          this.currentX = Math.floor(Math.random() * this.widthMax);
          this.$emit('onClick');
        }
      },
    },
    mounted() {
      const elHeight = 300;
      const elWidth = 75;
      this.widthMax = this.$refs.float.offsetParent.clientWidth - elWidth;
      this.heightMax = this.$refs.float.offsetParent.clientHeight - elHeight;
      this.currentX = Math.round(this.widthMax / 2);
      this.currentY = Math.round(this.heightMax / 2);
      this.xInterval = setInterval(() => {
        this.currentX += this.movementX;
      }, 15);
      this.YInterval = setInterval(() => {
        this.currentY += this.movementY;
      }, 15);
    },
    props: {
      isReady: {
        type: Boolean,
        required: true,
      },
    },
    watch: {
      currentX(newX) {
        this.$refs.float.style.left = `${newX}px`;
        if (newX >= this.widthMax || newX <= 0) {
          this.movementX = -this.movementX;
        }
      },
      currentY(newY) {
        this.$refs.float.style.top = `${newY}px`;
        if (newY >= this.heightMax || newY <= 0) {
          this.movementY = -this.movementY;
        }
      },
    },
    beforeUnmount() {
      clearInterval(this.xInterval);
      clearInterval(this.yInterval);
    },
  };
</script>

<style lang="scss" scoped>
  .float {
    cursor: pointer;
    position: absolute;
    width: 75px;
    height: 300px;
    z-index: 9;
  }
</style>
