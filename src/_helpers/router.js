import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../home/HomePage'
import LoginPage from '../home/LoginPage'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {path: '/', component: HomePage},
        {path: '/login', component: LoginPage},

        //Cho them nhung duong link khac vao day
        {path: '/*', redirect: '/'}
    ]
});

router.beforeEach((to, from, next) => {
    //  redirect den trang login neu chua duoc logged ma co gang truy cap trang
    const publicPage = ['/login'];
    const authRequired = !publicPage.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    
    if (authRequired && loggedIn) {
      
        return next('/login');
    }

    next();
})