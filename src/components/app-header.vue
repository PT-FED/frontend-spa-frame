<template>
    <div class="header">
        <div class="logo">
            <img height="32px" src="/assets/images/logo.png" alt="logo">
        </div>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
        <div class="user">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'app-header',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped>
    .header {
        font-weight: normal;
    }
    .logo img {
        margin: 0.5rem;
    }
</style>
