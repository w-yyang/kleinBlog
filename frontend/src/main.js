import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from '@/routers';
import store from '@/stores';
import App from './App.vue';
import '@/assets/resetcss/common.css';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
