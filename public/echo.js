Vue.use(VueRouter)

const router = new VueRouter({routes: [
    {path: '/create',       name: 'Create', component: httpVueLoader('components/Create.vue')},
    {path: '/create/:code', name: 'Edit',   component: httpVueLoader('components/Create.vue')},
    {path: '/show/:code',   name: 'Show',   component: httpVueLoader('components/Show.vue')},
    {path: '*', redirect: '/create'},
]})

new Vue({
    router,
    el: 'main',
    components: {
        Echo: httpVueLoader('components/Echo.vue'),
    },
})