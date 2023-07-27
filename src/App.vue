<template>
  <div id="app">
    <Pager :total="105" :current="current" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Pager from './components/Pager';
export default {
  components: {
    Pager
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

<style scoped>
.iconfont {
  font-size: 200px;
}
</style>