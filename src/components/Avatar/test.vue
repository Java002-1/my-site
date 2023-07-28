<template>
  <div class="test-container">
    <Avatar :src="img" :size="150" />
  </div>
</template>

<script>
import Avatar from './';
import logo from '@/assets/logo.png';
export default {
  components: {
    Avatar
  },
  data () {
    return {
      img: logo
    };
  }
}
</script>

<style>
</style>