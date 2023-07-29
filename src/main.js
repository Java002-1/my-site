//入口文件
import Vue from 'vue';
import App from './App.vue';
import './style/global.less';
import router from './router';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
