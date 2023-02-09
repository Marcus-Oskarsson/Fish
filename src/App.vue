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
      </ul>
    </nav>
  </header>
  <main>
    <!-- <RouterView name="sidebar" /> -->
    <RouterView />
  </main>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  main {
    min-height: 100vh;
  }
  .test {
    display: flex;
    flex-direction: row;
  }
</style>
