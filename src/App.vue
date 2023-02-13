<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/"> Hem </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/fish"> Fiska? </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :to="`/profile/${user.id}`">
            Profil
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main class="test">
    <RouterView name="sidebar" />
    <RouterView />
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        user: 'user/user'
      })
    }
  }
</script>

<style lang="scss">
  main {
    min-height: 100vh; // TODO går ju att få till via js
  }
  .test {
    display: flex;
    flex-direction: row;
  }
</style>
