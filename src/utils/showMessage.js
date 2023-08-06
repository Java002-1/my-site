import Icon from "@/components/Icon";
import getComponentsRootDom from "./getComponentsRootDom";
import style from './showMessage.module.less';

/**
 * 弹出消息提示
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 显示时长(ms)
 * @param {HTMLElement} container 容器(在传入的容器中显示消息)
 */
export default function (option = {}) {
  const content = option.content || '';
  const type = option.type || 'info';
  const duration = option.duration || 2000;
  const container = option.container || document.body;

  var div = document.createElement("div");
  const icon = getComponentsRootDom(Icon, {
    type
  });

  icon.className = icon.className + " " + style.icon;
  div.innerHTML = `<span>${icon.outerHTML}</span><div>${content}</div>`;

  div.className = `${style.message} ${style[`message-${type}`]}`;

  if (getComputedStyle(container).position === "static") {
    container.style.position = 'relative';
  }
  container.appendChild(div);
  div.clientHeight; //强行渲染reflow

  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;

  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    div.addEventListener('transitionend', function () {
      div.remove();
      option.callback && option.callback();
    }, { once: true });
  }, duration);
}