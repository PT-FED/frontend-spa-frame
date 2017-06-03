import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from '@/App.vue'
import Router from '@/app.router'

import '@/favicon.ico'
import '@/assets/images/icons.svg'
import '@/assets/fonts/icons.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/main.css'

// import menu from '@/vuex/modules/menu'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Element)

/**
 * 集中式存储管理应用的所有组件的状态
 */
const Store = new Vuex.Store({
	state: {
		isHome: true,
		navId: 'home'
	},
	mutations: {
		isHome (state, param) {
			state.isHome = param.isHome;
			state.navId = param.navId;	// 切换菜单
		}
	}
})

new Vue({
	el: '#app',
	router: Router,
	store: Store,
	template: '<App/>',
	components: {
		App
	}
})
