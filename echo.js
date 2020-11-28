Vue.use(VueRouter)

const router = new VueRouter({routes: [
    {path: '/edit/:code',   name: 'Edit',   component: httpVueLoader('components/Edit.vue')},
    {path: '/show/:code',   name: 'Show',   component: httpVueLoader('components/Show.vue')},
    {path: '*', redirect: '/edit/eJwLL8osSVXISC1KVdDT0wMAJdAEeg=='},
]})

new Vue({
    router,
    el: 'main',
    components: {
        Echo: httpVueLoader('components/Echo.vue'),
    },
})
