<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '../Icon';
export default {
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      default: "无数据"
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
@import "~@/style/var.less";
.empty-container {
  text-align: center;
  padding: 20px;
  color: @gray;
  .self-center();
}
.iconfont {
  font-size: 100px;
  color: @gray;
}
</style>