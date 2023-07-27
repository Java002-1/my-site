<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >

    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >

    <a
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: current === n }"
      >{{ n }}</a
    >

    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >

    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    //当前页码
    current: {
      type: Number,
      default: 1
    },//总条数
    total: {
      type: Number,
      default: 0
    },//每页显示条数
    limit: {
      type: Number,
      default: 10
    },//可见页码数
    visibleNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    pageNumber () {
      return Math.ceil(this.total / this.limit);
    },
    numbers () {
      const arr = [];
      for (let i = this.min; i <= this.max; i++) {
        arr.push(i);
      }
      return arr;
    },
    min () {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    max () {
      let end = this.min + this.visibleNumber - 1;

      if (end > this.pageNumber) {
        end = this.pageNumber;
      }
      return end;
    }
  },
  methods: {
    handleClick (newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }

      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  cursor: pointer;
  a {
    color: @primary;
    margin: 0 6px;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>