<template>
  <div id="app">
    <Pager :total="105" :current="current" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Pager from './';
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

