<template>
  <h1>Välkommen, {{ $store.state.user.name }}</h1>
  <pre>id: {{ $route.params.id }}</pre>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped></style>
