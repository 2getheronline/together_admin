import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '../views/Overview.vue'
import Dashboard from '../Dashboard.vue'
import store from './store.js'

Vue.use(VueRouter)

const routes = [{
        path: '/overview',
        name: 'Dashboard',
        component: Dashboard,
        children: [{
                path: '/overview',
                name: 'Overview',
                component: Overview,
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/analytics',
                name: 'Analytics',
                component: () => import( /* webpackChunkName: "about" */ '../views/Analytics.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/messages',
                name: 'Messages',
                component: () => import( /* webpackChunkName: "messages" */ '../views/Messages.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/missions',
                name: 'Missions',
                component: () => import( /* webpackChunkName: "missions" */ '../views/Missions.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/missions/create',
                name: 'EditMission',
                component: () => import( /* webpackChunkName: "editMissions" */ '../views/EditMission.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/missions/:id/edit',
                name: 'EditMission',
                component: () => import( /* webpackChunkName: "editMissions" */ '../views/EditMission.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/settings',
                name: 'Settings',
                component: () => import( /* webpackChunkName: "settings" */ '../views/Settings.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/users',
                name: 'Users',
                component: () => import( /* webpackChunkName: "users" */ '../views/Users.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/groups',
                name: 'Groups',
                component: () => import( /* webpackChunkName: "login" */ '../views/Groups.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/groups/:group',
                name: 'SingleGroup',
                component: () => import( /* webpackChunkName: "login" */ '../views/SingleGroup.vue'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: '/',
        name: 'Login',
        component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {

//     if (to.meta.requiresAuth) {
//         if (!store.getters.user.id) {
//             next({
//                 path: '/',
//                 query: {
//                     redirect: to.fullPath
//                 }
//             })
//         }
//     }
//     next()
// })

export default router
