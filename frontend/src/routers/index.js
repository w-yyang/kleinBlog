import {createRouter, createWebHashHistory} from 'vue-router';

import Home from '@/views/Home.vue';

const routerHashHistory = createWebHashHistory();
const router = createRouter({
    history: routerHashHistory,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [],
        },
        {
            path: '/:pathMatch(.*)',
            redirect: '/'
        },
    ],
});

export default router;