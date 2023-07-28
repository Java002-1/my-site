<template>
  <ul class="contact-container">
    <li>
      <a href="https://github.com/Java002-1" target="_blank">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>Java002</span>
      </a>
    </li>
    <li>
      <a href="mailto:biuder_four@163.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>biuder-four@163.com</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=24560075&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>24560075</span>
      </a>
      <div class="pop">
        <img class="wechat" :src="weixin" alt="" />
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span> java002</span>
      </a>
      <div class="pop">
        <img class="wechat" :src="weixin" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon';
import weChat from '@/assets/wechat.jpg';
export default {
  components: {
    Icon
  },
  data () {
    return {
      weixin: weChat
    };
  }

}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.contact-container {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
  background-color: transparent;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    font-size: 14px;
    margin: 20px;
    display: flex;
    align-content: center;
    color: #ccc;
    text-decoration: none;
    &:hover {
      color: #00bbff;
    }
  }
  .icon {
    width: 36px;
    &.weixin {
      text-indent: -3px;
      i {
        font-size: 32px;
      }
    }
  }
  .pop {
    margin: 0 20px;
    position: absolute;
    left: 0;
    bottom: @itemHeight;
    transition: 0.3s;

    background: transparent;
    transform: scaleY(0);
    transform-origin: center bottom;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translate(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: 5px;
    }
  }
}
.iconfont {
  font-size: 26px;
}
</style>