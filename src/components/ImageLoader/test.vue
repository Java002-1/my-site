<template>
  <div class="test-container">
    <ImagerLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="1000"
      @load="handlerLoader"
    />
  </div>
</template>

<script>
import ImagerLoader from './';
export default {
  components: {
    ImagerLoader
  }, methods: {
    handlerLoader () {
      console.log("load");
    }
  }
}
</script>

<style lang="less" scoped>
.test-container {
  height: 400px;
  width: 500px;
  border: 2px solid red;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
</style>