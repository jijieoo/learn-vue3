import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/ranking',
    },
    {
        path: '/ranking',
        name: 'ranking',
        component: () => import('@/views/ranking/index.vue'),
    },
    {
        path: '/match-record',
        name: 'match-record',
        component: () => import('@/views/match-record/index.vue'),
    },
    {
        path: '/match-room',
        name: 'match-room',
        component: () => import('@/views/match-room/index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
