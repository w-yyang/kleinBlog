import { createApp } from 'vue';
import router from '@/routers';
import store from '@/stores';
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
