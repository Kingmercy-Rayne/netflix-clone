import Vue from 'vue';
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';

require('./assets/css/global.css');

Vue.use(PerfectScrollbar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
