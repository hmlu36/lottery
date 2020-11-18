import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'lottery',
        component: () => import('../components/Lottery')
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('../components/List')
    },
    {
        path: '/add',
        name: 'add',
        component: () => import('../components/Create')
    },

    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../components/Edit')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;