//入口文件
import Vue from 'vue';
import App from './App.vue';
import './style/global.less';
import router from './router';
import showMessage from './utils/showMessage';


window.showMessage = showMessage;

// showMessage("4564879", "success");
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
