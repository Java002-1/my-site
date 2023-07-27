<template>
  <div class="imagerLoader-container">
    <img v-if="!evenythingDone" :src="placeholder" alt="" class="placeholder" />
    <img
      @load="handleLoad"
      :src="src"
      alt=""
      class="origin"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data () {
    return {
      originLoader: false,
      evenythingDone: false
    };
  },
  computed: {
    originOpacity () {
      return this.originLoader ? 1 : 0;
    }
  },
  methods: {
    handleLoad () {
      this.originLoader = true;
      setTimeout(() => {
        this.evenythingDone = true;
      }, this.duration);
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/style/mixin.less";
.imagerLoader-container {
  width: 100%;
  height: 100%;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>