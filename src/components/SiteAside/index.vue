<template>
  <div class="app">
    <!-- <Avatar :url="img" :size="100" />
    <Menu />
    <div class="contact">
      <Contact />
    </div> -->
  </div>
</template>

<script>
import logo from '@/assets/logo.png';
// import Avatar from '../Avatar';
// import Contact from '../Contact';
// import Menu from '../Menu';
export default {
  // components: {
  //   // Avatar,
  //   // Contact,
  //   // Menu
  // },
  data () {
    return {
      img: logo
    };
  }

}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.app {
  background: black;
  /* width: 300px; */
  /* height: 100%; */
  border: 1px solid red;
}
</style>