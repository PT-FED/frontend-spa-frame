<template>
  <div class="menu-container" v-show="!isHome">
    <ul class="menu">
      <li v-for="(item, index) in menuArr" :index="item.id" class="menu-item">
        <a href="javascript:void(0)">
          <i class="icon icon-setup"></i>
          {{item.name}}
        </a>
        <ul class="sub-menu">
          <li v-for="(subItem, index) in item.children" :index="subItem.id" class="menu-item">
            <a href="javascript:void(0)">
              {{subItem.name}}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app-sidebar',
    computed: {
      isHome () {
        return this.$store.state.isHome
      },
      menuArr () {
        return this.menu[this.$store.state.navId];
      }
    },
    data () {
      return {
        menu: {
          home: [],
          safe: [
            {
              id: '1',
              iconName: '',
              name: '菜单1',
              children: [
                {
                  id: '1-1',
                  name: '菜单11',
                  active: true,
                  path: '/sysinfo/overview'
                },
                {
                  id: '1-2',
                  name: '菜单12',
                  path: '/sysinfo/overview'
                }
              ]
            },
            {
              id: '2',
              iconName: '',
              name: '菜单2',
              path: '/sysinfo/overview'
            },
            {
              id: '3',
              iconName: '',
              name: '菜单3',
              path: '/sysinfo/overview'
            }
          ],
          threaten: [
            {
              id: '1',
              iconName: '',
              name: 'threaten菜单1',
              children: [
                {
                  id: '1-1',
                  name: 'threaten菜单11',
                  active: true,
                  path: '/sysinfo/overview'
                },
                {
                  id: '1-2',
                  name: 'threaten菜单12',
                  path: '/sysinfo/overview'
                }
              ]
            },
            {
              id: '2',
              iconName: '',
              name: 'threaten菜单2',
              path: '/sysinfo/overview'
            },
            {
              id: '3',
              iconName: '',
              name: 'threaten菜单3',
              path: '/sysinfo/overview'
            }
          ]
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .menu-container {
    height: 100%;
    background-color: #262626;
  }

  .menu {
    border-radius: 0;
    text-align: left;
  }

  .menu-item {
    line-height: 3rem;
    cursor: pointer;
  }

  .menu-item a {
    color: #AFB4B8;
    display: block;
  }

  .menu-item a:hover {
    background-color: #20a0ff;
    color: #fff;
  }

  .menu-item .icon {
    font-size: 13px;
    vertical-align: middle;
  }

  .sub-menu {
    background-color: #7A7A7A;
  }

  .menu-item a {
    padding-left: 2rem;
  }

  .sub-menu .menu-item a {
    padding-left: 3rem;
  }

</style>
