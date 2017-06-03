<template>
  <ul class="clearfix">
    <li v-for="(item, index) in nav" @click="selected(index)" :class="{active: item.active}">
      <a href="javascript:void(0)" :data-index="index">{{item.name}}</a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'app-nav',
    data () {
      return {
        prevActiveIndex: 0,
        nav: [
          {
            id: 'home',
            name: '首页',
            active: false,
            path: 'home'
          },
          {
            id: 'safe',
            name: '安全态势感知中心',
            active: false,
            path: 'safe'
          },
          {
            id: 'threaten',
            name: '威胁情报中心',
            active: false,
            path: 'threaten'
          },
          {
            id: 'forecast',
            name: '预测分析中心',
            active: false,
            path: 'forecast'
          },
          {
            id: 'sdc',
            name: 'SDC平台管理',
            active: false,
            path: 'sdc'
          },
          {
            id: 'screen',
            name: '可视化大屏',
            active: false,
            path: 'screen'
          },
          {
            id: 'sysmanage',
            name: '系统管理',
            active: false,
            path: 'sysmanage'
          }
        ]
      }
    },
    methods: {
      selected: function (index) {
        this.nav[this.prevActiveIndex].active = false;
        this.prevActiveIndex = index;
        var item = this.nav[index];
        item.active = true;
        this.$router.push(item.path);
        this.$store.commit('isHome', {
          isHome: item.path === 'home',
          navId: item.id
        });
      }
    }
  }
</script>

<style scoped>
  ul {

  }

  ul li {
    float: left;
    padding: 0 1rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 0.9rem;
    box-sizing: border-box;
    cursor: pointer;
  }

  ul li a {
    text-decoration: none;
    color: #AFB4B8;
  }

  ul li:hover {
    border-bottom: 5px solid #20a0ff;
  }

  ul li:hover a {
    color: #fff;
  }

  ul li.active a {
    color: #20a0ff;
  }
</style>
