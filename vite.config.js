import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [VantResolver()],
		}),
		visualizer(),
	],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	server: {
		open: true,
	},
	// css: {
	// 	preprocessorOptions: {
	// 		scss: {
	// 			// 配置 nutui 全局 scss 变量
	// 			additionalData: '@import "@nutui/nutui/dist/styles/variables.scss";',
	// 		},
	// 	},
	// },
});
