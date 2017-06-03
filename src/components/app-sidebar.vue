<template>
  <div class="menu-container" v-show="!isHome">
    <ul class="menu">
      <li v-for="(item, index) in menuArr" class="menu-item">
        <a href="javascript:void(0)" @click="activeItem(item.path)">
          <i class="icon icon-setup"></i>
          {{item.name}}
        </a>
        <ul class="sub-menu">
          <li v-for="(subItem, index) in item.children" class="menu-item">
            <a href="javascript:void(0)" @click="activeItem(subItem.path)">
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
                  path: '/safe/safe1'
                },
                {
                  id: '1-2',
                  name: '菜单12',
                  path: '/safe/safe2'
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
      activeItem: function(path) {
        path && this.$router.push(path);
      }
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
    font-size: 0.9rem;
    transition: all .1s;
  }

  .menu-item a:hover {
    background-color: #20a0ff;
    color: #fff;
  }

  .menu-item .icon {
    font-size: 0.8rem;
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
