import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// route-level code splitting

const HelloWorld = () => import('../components/HelloWorld.vue');
const a = () => import('../components/a.vue');
const sku = () => import('../components/sku.vue')

export function createRouter () {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/', component: HelloWorld },
            { path: '/a', component: a },
            { path: '/sku/:id', component: sku },
        ]
    })
}