import Router from 'vue-router'
import Home from '@/views/home.vue'
/**
 * 教程: https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
 * 		https://doc.webpack-china.org/guides/code-splitting-async/
 * 介绍: 根据路由的路径设置按需加载组件, 是webpack提供的特有写法
 */
const Home2 = resolve => require(['@/views/home2.vue'], resolve);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/2',
			name: 'home2',
			component: Home2
		}
	]
})

