import Router from 'vue-router'
import Hello from '@/components/Hello.vue'

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		}
	]
})

