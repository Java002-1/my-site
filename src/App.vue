<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <SiteAside />
      </template>
      <template #default>
        <router-view></router-view>
      </template>
    </Layout>
  </div>
</template>

<script>
// import Pager from './components/Pager';
import Layout from './components/Layout';
import SiteAside from './components/SiteAside';
export default {
  components: {
    Layout,
    SiteAside
  },
  data () {
    return {
      current: 10
    };
  },
  methods: {
    handlePageChange (newPage) {
      this.current = newPage;
    }
  }

}
</script>

<style scoped lang="less">
@import "~@/style/mixin.less";
.app-container {
  .self-fill();
  // background: red;
}
</style>