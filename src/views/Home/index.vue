<template>
  <div ref="home" class="home-container">
    <h1>首页</h1>
    <button @click="handlerClick">click</button>
  </div>
</template>

<script>
import { showMessage } from '@/utils';
export default {
  methods: {
    handlerClick () {
      console.log("123");
      showMessage("123", "success", 2000, this.$refs.home);
    }
  }
}
</script>

<style>
.home-container {
  width: 300px;
  height: 500px;
  background: lightblue;
  border: 1px solid;
  margin: 50px auto;
}
</style>