import Vue from 'vue'
import App from './App'
import router from './router/index'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        isLogin: false
    }
})

// 导航守卫
router.beforeEach((to, from, next) => {
    console.log(to.path)
    console.log(store.state.isLogin)
    if (!store.state.isLogin&&to.path!='/login') {
        next('/login');
    } else {
        next();
    }
});
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});


export default store;