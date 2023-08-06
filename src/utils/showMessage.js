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
export default function (content, type = "info", duration = 2000, container) {
  var div = document.createElement("div");
  const icon = getComponentsRootDom(Icon, {
    type
  });

  icon.className = icon.className + " " + style.icon;
  div.innerHTML = `<span>${icon.outerHTML}</span><div>${content}</div>`;

  div.className = `${style.message} ${style[`message-${type}`]}`;

  if (!container) {
    container = document.body;
  } else {
    if (getComputedStyle(container).position === "static") {
      container.style.position = 'relative';
    }

  }
  container.appendChild(div);
  div.clientHeight; //强行渲染reflow

  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;
  // console.log(duration);

  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    div.addEventListener('transitionend', function () {
      div.remove();
    }, { once: true });
  }, duration);
}