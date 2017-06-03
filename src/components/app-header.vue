<template>
  <div class="header">
    <div class="logo">
      <img height="32px" src="/assets/images/logo.png" alt="logo">
    </div>
    <div class="nav">
      <app-nav></app-nav>
    </div>
    <!--<div class="user">-->
      <!--<ul clas="clearfix">-->
        <!--<li class="item">-->
          <!--<el-dropdown>-->
            <!--<div class="el-dropdown-link">-->
              <!--<a href="javascript:void(0)">-->
                <!--<svg class="icon">-->
                  <!--<use xlink:href="/assets/images/icons.svg#userinfo"></use>-->
                <!--</svg>-->
                <!--<svg class="icon small">-->
                  <!--<use xlink:href="/assets/images/icons.svg#arrowdown"></use>-->
                <!--</svg>-->
              <!--</a>-->
            <!--</div>-->
            <!--<el-dropdown-menu slot="dropdown">-->
              <!--<el-dropdown-item>用户管理</el-dropdown-item>-->
              <!--<el-dropdown-item>修改密码</el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
          <!--</el-dropdown>-->
          <!--<div class="v-line"></div>-->
        <!--</li>-->
        <!--<li class="item">-->
          <!--<el-tooltip content="注销" placement="bottom-end">-->
            <!--<a href="javascript:void(0)">-->
              <!--<svg class="icon">-->
                <!--<use xlink:href="/assets/images/icons.svg#signout"></use>-->
              <!--</svg>-->
            <!--</a>-->
          <!--</el-tooltip>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <div class="user">
      <ul clas="clearfix">
        <li class="item">
          <el-dropdown>
            <div class="el-dropdown-link">
              <a href="javascript:void(0)">
                <i class="icon icon-userinfo"></i>
                <i class="icon icon-arrowdown"></i>
              </a>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户管理</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="v-line"></div>
        </li>
        <li class="item">
          <el-tooltip content="注销" placement="bottom-end">
            <a href="javascript:void(0)">
              <i class="icon icon-signout"></i>
            </a>
          </el-tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import '@/assets/images/logo.png'
  import appNav from '@/components/app-nav.vue'

  export default {
    name: 'app-header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      appNav
    }
  }
</script>

<style scoped>
  .header {
    position: relative;
    background-color: #1a1a1a;
  }

  .logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 3rem;
  }

  .logo img {
    margin: 0.5rem 1rem;
  }

  .nav {
    /*width: 100%;*/
    padding: 0 150px;
  }

  .user {
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
  }

  .user .item {
    float: left;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    position: relative;
  }

  .user .v-line {
    position: absolute;
    top: 0;
    right: 0;
    height: 33%;
    top: 33%;
    background: #AFB4B8;
    opacity: 0.2;
  }

  .user .item:first-child {
    width: calc(150px - 4rem);
  }

  .user .item:last-child {
    width: 4rem;
  }

  .user .item a {
    text-decoration: none;
    color: #AFB4B8;
  }

  .user .item .icon {
  }
</style>
