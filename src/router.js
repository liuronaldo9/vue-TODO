import Vue from 'vue'
import Router from 'vue-router'
import Tode from './components/Todo'
import About from './components/About'
// import router from './router/index';

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'skills',
            component: Tode
        },
        {
            path: '/about/:name',
            name: 'about',
            component: About
        },
    ]
})