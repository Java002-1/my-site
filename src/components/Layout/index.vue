<template>
  <diV class="layout-container">
    <div class="left"><slot name="left"></slot></div>
    <div class="main"><slot></slot></div>
    <div class="right"><slot name="right" class="right"></slot></div>
  </diV>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto;
    height: 100%;
  }
  .main {
    flex: 1 1 auto;
    height: 100%;
  }
}
</style>