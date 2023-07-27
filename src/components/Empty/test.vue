<template>
  <div class="app">
    <Empty />
  </div>
</template>

<script>
import Empty from './';
export default {
  components: {
    Empty
  },
}
</script>

<style>
.app {
  height: 500px;
  width: 400px;
  border: 2px solid red;
  margin: 0 auto;
  position: relative;
}
</style>