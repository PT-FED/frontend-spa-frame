<template>
  <ul class="clearfix">
    <li v-for="(item, index) in nav"
        @click="selected(item.routerName)"
        :class="{active: item.routerName === active}">
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
            routerName: 'home',
            name: '首页'
          },
          {
            routerName: 'safe',
            name: '安全态势感知中心'
          },
          {
            routerName: 'threaten',
            name: '威胁情报中心',
          },
          {
            routerName: 'forecast',
            name: '预测分析中心',
          },
          {
            routerName: 'sdc',
            name: 'SDC平台管理',
          },
          {
            routerName: 'screen',
            name: '可视化大屏',
          },
          {
            routerName: 'sysmanage',
            name: '系统管理',
          }
        ]
      }
    },
    computed: {
      active () {
        return this.$store.state.navId
      }
    },
    methods: {
      selected: function (routerName) {
        this.$router.push({name: routerName});
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
    transition: all .1s;
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
