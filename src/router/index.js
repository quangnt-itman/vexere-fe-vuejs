import Vue from 'vue';
import VueRouter from 'vue-router';

import jwtDecode  from "jwt-decode";
import Toastr from "toastr/build/toastr.min.js";
import $ from "jquery";


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
        component: () => import( '../views/AdminTemplate/DashboardPage' ),
        beforeEnter(to, from, next){
          if(localStorage.getItem("token")){
            try{
              const decode = jwtDecode(localStorage.getItem("token"));
              if(decode.userType.toLowerCase() === "admin".toLowerCase()){
                next();
              }else{
                throw new Error();
              }
            } catch(error){
              localStorage.removeItem("token");
              Toastr.warning(
                "<button type='button' class='btn btn-secondary mr-2' id='closeToastr' >Close</button> <button type='button' class='btn btn-success' id='dispatchHandleRouter'>Yes</button>",
                "You need to login?",
                {
                  closeButton: true,
                  timeOut: 0,
                  positionClass: "toast-top-center",
                  tapToDismiss: false,
                  onShown: function() {
                    $("#dispatchHandleRouter").click(function() {
                      Toastr.remove();
                      next("/admin/login");
                    });
                    $("#closeToastr").click(function() {
                      Toastr.remove();
                    });
                  }
                }
              );
            }
          }
          else{
            router.push('/admin/login')
          }
        }
      },
      {
        path: '/admin/login',
        name: 'AdminLogin',
        component: () => import( "./../views/AdminTemplate/LoginAdminPage" ),

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
