import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Element from 'element-ui'

import App from './App.vue'
import Router from './app.router'


Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Element)

new Vue({
	el: '#app',
	router: Router,
	template: '<App/>',
	components: { App }
})
