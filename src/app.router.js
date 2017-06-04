import VueRouter from 'vue-router'

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

let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/', name: 'home', component: home
		},
		{
			path: '/home', name: 'home', component: home
		},
		{
			path: '/safe', name: 'safe', component: safe,
			children: [
				{
					path: '',	name: 'safe', component: safe
				},
				{
					path: 'safe1', name: 'safe1', component: home
				},
				{
					path: 'safe2', name: 'safe2', component: sdc
				},
				{
					path: 'safe3', name: 'safe3', component: home
				},
				{
					path: 'safe4', name: 'safe4', component: sdc
				},
				{
					path: 'safe5', name: 'safe5', component: home
				}
			]
		},
		{
			path: '/threaten', name: 'threaten', component: threaten,
			children: [
				{
					path: '', name: 'threaten', component: home,
				},
				{
					path: 'threaten1', name: 'threaten1', component: home
				},
				{
					path: 'threaten2', name: 'threaten2', component: sdc
				},
				{
					path: 'threaten3', name: 'threaten3', component: home
				},
				{
					path: 'threaten4', name: 'threaten4', component: sdc
				}
			]
		},
		{
			path: '/forecast', name: 'forecast', component: forecast
		},
		{
			path: '/sdc', name: 'sdc', component: sdc
		},
		{
			path: '/screen', name: 'screen', component: bigscreen
		},
		{
			path: '/sysmanage', name: 'sysmanage', component: sysmanage
		}
	]
})

/**
 * 主要用来拦截路由的钩子
 * @param to Route: 即将要进入的目标 路由对象
 * @param from: Route: 当前导航正要离开的路由
 * @param next: Function: 一定要调用该方法来 resolve 这个钩子
 */
router.beforeEach((to, from, next) => {
	let path = to.path === '/' ? to.path : to.path.substring(1);
	let index = path.indexOf('/');
	router.app.$store.commit('isHome', {
		isHome: to.name === 'home',
		navId: index === -1 ? path : path.substring(0, index),
		menuId: to.name
	});
	next();
});

export default router;

