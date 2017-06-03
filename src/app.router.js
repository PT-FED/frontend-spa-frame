import Router from 'vue-router'

/**
 * 教程: https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
 *      https://doc.webpack-china.org/guides/code-splitting-async/
 * 介绍: 根据路由的路径设置按需加载组件, 是webpack提供的特有写法
 */
const home = resolve => require(['@/views/home.vue'], resolve);
const safe = resolve => require(['@/views/safe.vue'], resolve);
const threaten = resolve => require(['@/views/threaten.vue'], resolve);
const forecast = resolve => require(['@/views/forecast.vue'], resolve);
const sdc = resolve => require(['@/views/sdc.vue'], resolve);
const bigscreen = resolve => require(['@/views/screen.vue'], resolve);
const sysmanage = resolve => require(['@/views/sysmanage.vue'], resolve);

export default new Router({
	routes: [
		{
			path: '/',
			component: home
		},
		{
			path: '/home',
			component: home
		},
		{
			path: '/safe',
			component: safe
		},
		{
			path: '/threaten',
			component: threaten
		},
		{
			path: '/forecast',
			component: forecast
		},
		{
			path: '/sdc',
			component: sdc
		},
		{
			path: '/screen',
			component: bigscreen
		},
		{
			path: '/sysmanage',
			component: sysmanage
		}
	]
})

