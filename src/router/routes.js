export default [
	{
		path: '/',
		redirect: '/home',
		component: () => import('@/layout/basic/index.vue'),
		children: [
			{
				path: '/home',
				component: () => import('@/views/home/index.vue'),
				meta: {
					title: '',
					keepAlive: true,
				},
			},
		],
	},
	// {
	// 	name: 'login',
	// 	path: '/login',
	// 	component: () => import('/@/views/login/index.vue'),
	// 	meta: {
	// 		title: '',
	// 		keepAlive: true,
	// 	},
	// },
];
