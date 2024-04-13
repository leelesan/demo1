import Vue from 'vue';
import VueRouter from 'vue-router'
import loginView from "@/components/LoginView.vue";
import helloWorld from "@/components/HelloWorld.vue";


Vue.use(VueRouter)

const routers = [
    {
        path: '/login',
        component: loginView,
    },
    {
        path: '/HelloWorld',
        component: helloWorld
    }
]

const router = new VueRouter({
    routes: routers
});


export default router;