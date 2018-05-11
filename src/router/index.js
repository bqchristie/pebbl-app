import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Board from '@/components/Board';
import Root from '@/components/Root';

Vue.use(Router);


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/root',
      name: 'Root',
      component: Root,
    },
    {
      path: '/board',
      name: 'Board',
      component: Board,
    },
  ],
});


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (!token && to.path !== '/login' && to.path !== '/')  {
    console.log('redirecting to login');
    next('/login');
  }
  else {
    next();
  }
});

export default router;
