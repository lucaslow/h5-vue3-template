import axios from 'axios';

const service = axios.create({
	baseURL: '',
	timeout: 30 * 1000,
	// 请求是否携带cookie
	withCredentials: true,
});

// 请求拦截器
service.interceptors.request.use(
	(config) => {
		console.log(config);
	},
	(err) => {
		console.log(err);
	}
);
// 响应拦截器
service.interceptors.response.use(
	(response) => {
		console.log(response);
	},
	(err) => {
		console.log(err);
	}
);

export default service;
