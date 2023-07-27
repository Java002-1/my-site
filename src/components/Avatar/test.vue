<template>
  <Avatar :src="img" :size="100" />
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