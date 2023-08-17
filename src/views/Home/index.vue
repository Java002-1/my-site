<template>
  <div class="home-container">
    <ul>
      <li v-for="item in data" :key="item.id">
        <Carouselitem />
      </li>
    </ul>
    <div class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div class="icon icon-down">
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li v-for="item in data" :key="item.id"></li>
    </ul>
  </div>
</template>

<script>
import { getBanner } from '../../api/banner.js';
import Carouselitem from './Carouselitem';
import Icon from '@/components/Icon';
export default {
  components: {
    Carouselitem,
    Icon
  },
  data () {
    return {
      data: []
    };
  },
  async created () {
    this.data = await getBanner();
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
.home-container {
  width: 100%;
  position: relative;
  height: 100%;
  ul {
    margin: 0;
  }
}

.icon {
  .self-center();
  @gap: 15px;
  &.icon-up {
    top: @gap;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
  }
}
.iconfont {
  font-size: 30px;
}
</style>