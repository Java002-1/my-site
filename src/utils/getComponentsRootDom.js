import Vue from "vue";

/**
 * 获取某个组件渲染的Dom元素
 * @param {*} comp 需要渲染的组件
 * @param {*} props 传递给组件的props属性，是一个对象{}
 * @returns 
 */
export default function (comp, props) {
  const vm = new Vue({
    render: h => h(comp, { props })
  });
  vm.$mount();
  return vm.$el;
}