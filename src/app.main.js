import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Element from 'element-ui'

import App from '@/App.vue'
import Router from '@/app.router'

import '@/favicon.ico'
import '@/assets/styles/main.css'
import '@/assets/fonts/icons.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Element)

new Vue({
	el: '#app',
	router: Router,
	template: '<App/>',
	components: {
		App
	}
})
