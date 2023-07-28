<template>
  <div class="site-aside-container">
    <Avatar
      url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"
      :size="150"
    />
    <h1 class="title">小窝</h1>
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Avatar from '@/components/Avatar/index.vue';
import Contact from './Contact';
import Menu from './Menu';
export default {
  components: {
    Avatar,
    Contact,
    Menu
  }
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";

.site-aside-container {
  background: @dark;
  height: 100%;
  width: 100%;
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}

.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>