import Vue from 'vue';
import App from './App.vue';
// import './registerServiceWorker';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/umd/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

import "toastr/build/toastr.css";
import toastr from "toastr/build/toastr.min.js";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.use(toastr);

Vue.config.productionTip = false;

new Vue( {
  router,
  store,
  render: h => h( App )
} ).$mount( '#app' );
