<template>
  <div class="menu-container" v-show="!isHome">
    <ul class="menu">
      <li v-for="(item, index) in menuArr" class="menu-item">
        <a href="javascript:void(0)"
           @click="activeItem(item)"
           :class="{active: item.isActive}">
          <i class="icon" :class="item.icon"></i>
          {{item.name}}
        </a>
        <ul v-if="Array.isArray(item.children) && item.children.length > 0"
            class="sub-menu" :class="item.isOpen ? 'open' : 'close'"
            :style="{height: (item.children.length * 40)+ 'px'}">
          <li v-for="(subItem, index) in item.children" class="menu-item">
            <a href="javascript:void(0)"
               @click="activeItem(subItem)"
               :class="{active: subItem.routerName === active}">
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
        return this.menu[this.$store.state.navId]
      },
      active () {
        // 联动父菜单选中
        let menuId = this.$store.state.menuId
        let menu = this.menuArr
        for(let item of menu) {
          let isActive = false;
          let isOpen = false;
          if (item.children) {
            for(let sub of item.children) {
              if (menuId === sub.routerName) {
                isActive = true;
                isOpen = true;
              }
            }
          }
          if (menuId === item.routerName) {
            isActive = true;
          }
          this.$set(item, 'isActive', isActive);
          this.$set(item, 'isOpen', isOpen);
        }
        return menuId
      }
    },
    data () {
      return {
        menu: {
          home: [],
          safe: [
            {
              icon: 'icon-setup',
              name: '菜单1',
              children: [
                {
                  name: '菜单11',
                  routerName: 'safe1'
                },
                {
                  name: '菜单12',
                  routerName: 'safe2'
                }
              ]
            },
            {
              icon: 'icon-setup',
              name: '菜单2',
              children: [
                {
                  name: '菜单21',
                  routerName: 'safe3'
                },
                {
                  name: '菜单22',
                  routerName: 'safe4'
                }
              ]
            },
            {
              icon: 'icon-setup',
              name: '菜单3',
              routerName: 'safe5'
            }
          ],
          threaten: [
            {
              icon: '',
              name: 'threaten菜单1',
              children: [
                {
                  name: 'threaten菜单11',
                  routerName: 'threaten1'
                },
                {
                  name: 'threaten菜单12',
                  routerName: 'threaten2'
                }
              ]
            },
            {
              icon: '',
              name: 'threaten菜单2',
              routerName: 'threaten3'
            },
            {
              icon: '',
              name: 'threaten菜单3',
              routerName: 'threaten4'
            }
          ]
        }
      }
    },
    methods: {
      activeItem: function(item) {
        if (Array.isArray(item.children) && item.children.length > 0) {
          this.menuArr.forEach(val => {
            if (val !== item) val.isOpen = false
          });
          item.isOpen = !item.isOpen;
        } else {
          item.routerName && this.$router.push({name: item.routerName})
        }
      }
    }
  }
</script>

<style scoped>
  .menu-container {
    height: 100%;
    background-color: #1e1e1e;
  }

  .menu {
    border-radius: 0;
    text-align: left;
    box-sizing: border-box;
    border-top: 1px solid #252525;
  }

  .menu-item {
    line-height: 2.5rem;
    cursor: pointer;
  }

  .menu-item a {
    color: #AFB4B8;
    display: block;
    font-size: 0.9rem;
    transition: all .1s;
    box-sizing: border-box;
    border-bottom: 1px solid #252525;
  }

  .menu-item a i {
    padding-right: .5rem;
  }

  .menu-item a:hover {
    color: #fff;
  }

  .menu-item a.active {
    color: #20a0ff;
  }

  .menu-item .icon {
    font-size: 0.8rem;
    vertical-align: middle;
  }

  .menu-item a {
    padding-left: 1.5rem;
  }

  .sub-menu {
    background-color: #161616;
    transition: all .25s;
    overflow: hidden;
    transform-origin: top;
    padding: .5rem 0;
    border-bottom: 1px solid #252525;
  }

  .sub-menu.close {
    transform: scaleY(0);
    height: 0 !important;
    padding: 0;
  }

  .sub-menu.open {
    transform: scale(1);
  }

  .sub-menu .menu-item a {
    padding-left: 3rem;
    border-bottom: 0;
  }

  .sub-menu .menu-item a.active {
    background-color: #161616;
    color: #20a0ff;
  }

</style>
