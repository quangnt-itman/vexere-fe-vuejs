import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/umd/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

Vue.config.productionTip = false;

new Vue( {
  router,
  render: h => h( App )
} ).$mount( '#app' );
