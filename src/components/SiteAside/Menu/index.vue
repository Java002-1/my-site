<template>
  <!-- <div> -->
  <ul class="menu-container">
    <li v-for="item in items" :key="item.link">
      <a :class="{ selected: isSelected(item) }" :href="item.link"
        ><div class="icon">
          <Icon :type="item.icon" />
        </div>
        <span>{{ item.title }}</span>
      </a>
    </li>
  </ul>

  <!-- </div> -->
</template>

<script>
import Icon from '../Icon';
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
          selected: true
        }, {
          link: "/blog",
          title: "文章",
          icon: "blog",
          selected: false,
          startWith: true
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
          selected: false
        }, {
          link: "/project",
          title: "项目&效果",
          icon: "code",
          selected: false
        }, {
          link: "/message",
          title: "留言板",
          icon: "chat",
          selected: false
        }
      ]
    };
  },
  methods: {
    isSelected (path) {
      const link = path.link.toLowerCase();
      const local = location.pathname.toLowerCase();
      if (path.startWith) {
        return local.startsWith(link);
      }
      return link === local;
    }
  }

}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
ul {
  margin: 15px 0;
  padding: 0;
  height: inherit;
  width: 100%;
  background: transparent;
  display: table;
}

li {
  list-style: none;
  // display: block;
  // width: 100%;
  // height: 20%;
  color: #ccc;
  a {
    cursor: pointer;
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    // text-align: center;
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