<template>
  <div class="app-container">
    <header-wrapper />
  </div>
</template>

<script>
import HeaderWrapper from '~/components/header/header'

export default {
  components: {
    HeaderWrapper
  }
}
</script>

<style lang="scss">
.app-container {
  min-height: 100vh;
}
</style>
