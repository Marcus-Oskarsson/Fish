<template>
  <div
    class="background-container container-fluid d-flex justify-content-center align-items-center"
  >
    <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="`https://robohash.org/${$route.params.id}.png`"
            class="img-fluid rounded-start"
            :alt="`${name} representerad av en avatar`"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{ name }}</h2>
            <ul>
              <li class="card-text">Level: {{ level }}</li>
              <li class="card-text">XP: {{ xp }}.</li>
              <li class="card-text">
                Total fish caught: {{ catchedFish.length }}.
              </li>
            </ul>
            <q class="card-text font-bold">
              The fish in the creek said nothing. Fish never do. Few people know
              what fish think about injustice, or anything else.
            </q>
            <p class="card-text">
              <small class="text-muted">{{ timeAgoText }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- https://robohash.org/test.png -->
<script>
  import moment from 'moment';

  export default {
    computed: {
      name() {
        return this.$store.state.user.name;
      },
      catchedFish() {
        return this.$store.state.catchedFish.catchedFish;
      },
      lastCatchedFish() {
        return this.catchedFish[this.catchedFish.length - 1];
      },
      level() {
        // level beroende på hur många steg i fibboncci.
        let last = 8;
        let current = 13;
        let level = 0;
        while (this.xp > current) {
          const temp = current;
          current += last;
          last = temp;
          level += 1;
        }
        return level;
      },
      timeAgoText() {
        if (this.lastCatchedFish) {
          const date = this.lastCatchedFish?.catchedTime;
          return `Catched a ${this.lastCatchedFish.name}, ${moment(
            date,
          ).fromNow()}.`;
        }
        return 'No fish here.';
      },
      xp() {
        return this.catchedFish.reduce((total, fish) => total + fish.points, 0);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/main.scss';
  .background-container {
    background-color: $water;
  }
</style>
