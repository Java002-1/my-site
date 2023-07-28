<template>
  <diV class="layout-container">
    <slot name="left"></slot>
    <slot></slot>
    <slot name="right" class="right"></slot>
  </diV>
</template>

<script>
export default {

}
</script>

<style scoped>
.left {
  background: red;
}
</style>