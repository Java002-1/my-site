<template>
  <img
    class="avatar-img"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,  //表示这个组件接受一个名为 url 的 prop，其类型为 String。
      required: true
    },
    size: {
      type: Number
    }
  }
}
</script>
<!--加上scoped会给当前组件加一个类样式，保证每个组件都是一样的，防止元素命名冲突-->
<style scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>