<template>
  <div id="app">
    <div class="header">
      <app-header></app-header>
    </div>
    <div class="container">
      <div class="sidebar">
        <app-sidebar></app-sidebar>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import appHeader from '@/components/app-header.vue'
  import appSidebar from '@/components/app-sidebar.vue'

  export default {
    name: 'app',
    components: {
      appHeader,
      appSidebar
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
    position: relative;
  }

  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 3rem;
  }

  .container {
    height: 100%;
    padding-top: 3rem;
    display: flex;
  }

  .sidebar {
    width: 200px;
    height: 100%;
  }

  .content {
    width: calc(80% - 200px);
    height: 100%;
  }
</style>
