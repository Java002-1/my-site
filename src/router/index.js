import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';




Vue.use(VueRouter); //适用一个路由插件

const router = new VueRouter({
  routes, //路由导入规则
  // mode: 'history', //去掉url中的#
});

export default router;