<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from './';
export default {
  components: {
    Contact
  }
}
</script>

<style scoped>
.test-container {
  height: 400px;
  width: 300px;
  border: 2px solid red;
  background: black;
  margin: 0 auto;
  padding-top: 200px;
}
</style>