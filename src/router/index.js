import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeTemplate from '../views/HomeTemplate';
import AdminTemplate from '../views/AdminTemplate';
import Auth from '../views/AuthPage';

Vue.use( VueRouter );

const routes = [
  // HomeTemplate
  {
    path: '/',
    name: 'HomeTemplate',
    component: HomeTemplate,

    children: [
      {
        path: '/',
        name: 'HomePage',
        component: () => import( '../views/HomeTemplate/HomePage' )
      },
      {
        path: '/about',
        name: 'AboutPage',
        component: () => import( '../views/HomeTemplate/AboutPage' )
      },
    ],
  },

  // AdminTemplate
  {
    path: '/admin',
    name: 'AdminTemplate',
    component: AdminTemplate,

    children: [
      {
        path: '/admin',
        name: 'DashboardPage',
        component: () => import( '../views/AdminTemplate/DashboardPage' )
      }
    ]
  },

  // Auth
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,

    children: [
      {
        path: '/auth',
        name: 'Login',
        component: () => import( '../components/Login' )
      }
    ],
  },

  // PageNotFound
  {
    path: "/:patchMatch(.*)*",
    component: () => import( "./../views/PageNotFound" ),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,
  routes
} );

export default router;
