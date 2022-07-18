import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button } from 'vant';

const app = createApp(App);

app.use(router).use(store);

// 使用组件
app.use(Button);

// 挂载
app.mount('#app');
