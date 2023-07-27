<template>
  <div class="app">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from './';
export default {
  components: {
    Menu
  }
}
</script>

<style scoped>
.app {
  padding: 0;
  margin: 0 auto;
  height: 600px;
  width: 400px;
  background: black;
  border: 2px solid red;
}
</style>