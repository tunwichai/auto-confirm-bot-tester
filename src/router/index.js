import Vue from 'vue';
import Router from 'vue-router';
import GrabSingle from '@/views/GrabSingle.vue';
import Home from '@/views/Home.vue'; 
import Details from '@/views/Details.vue';
import Login from '@/views/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/grab-single',
      name: 'GrabSingle',
      component: GrabSingle,
      props: true,
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details,
      props: true,
    },

    {
      path: '*',
      redirect: '/',
    },
  ],
});
