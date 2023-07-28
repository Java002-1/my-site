<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from './';
import '@/style/global.less';
export default {
  components: {
    SiteAside
  }
}
</script>

<style scoped>
.test-container {
  width: 300px;
  height: 600px;
  border: 1px solid red;
  margin: 0 auto;
}
</style>