<template>
  <div ref="home" class="home-container">
    <h1>首页</h1>
    <button @click="handlerClick">click</button>
  </div>
</template>

<script>
export default {
  methods: {
    handlerClick () {
      this.$showMessage({
        content: "123",
        type: "success",
        duration: 2000,
        container: this.$refs.home,
        callback: () => {
          console.log("123");
        }
      });
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