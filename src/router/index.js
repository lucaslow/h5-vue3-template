import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
	// vueRouter@3版本的mode改成了history，hash模式配置createWebHashHistory，history模式配置createWebHistory
	history: createWebHashHistory(),
	routes,
});

export default router;
