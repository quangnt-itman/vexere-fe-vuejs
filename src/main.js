import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/umd/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

// import { store } from './store'; //* export const store =
import  store  from './store'; //* export default

console.log( store );

Vue.config.productionTip = false;

new Vue( {
  router,
  store,
  render: h => h( App )
} ).$mount( '#app' );
