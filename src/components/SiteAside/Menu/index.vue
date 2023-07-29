<template>
  <!-- <div> -->
  <ul class="menu-container">
    <li v-for="item in items" :key="item.link">
      <router-link
        :exact="item.exact"
        :to="item.link"
        active-class="selected"
        exact-active-class=""
        ><div class="icon">
          <Icon :type="item.icon" />
        </div>
        <span>{{ item.title }}</span>
      </router-link>
    </li>
  </ul>

  <!-- </div> -->
</template>

<script>
import Icon from '@/components/Icon';
import '@/style/global.less';
export default {
  components: {
    Icon
  },
  data () {
    return {
      items: [
        {
          link: "/",
          title: "首页",
          icon: "home",
          exact: true
        }, {
          link: "/blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: true
        }, {
          link: "/project",
          title: "项目&效果",
          icon: "code",
          exact: true
        }, {
          link: "/message",
          title: "留言板",
          icon: "chat",
          exact: true
        }
      ]
    };
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
ul {
  margin: 50px 0;
  padding: 0;
  // height: inherit;
  width: 100%;
  background: transparent;
  display: table;
}

li {
  list-style: none;
  color: #ccc;
  a {
    cursor: pointer;
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      background: darken(@words, 2%);
    }
  }
}
</style>