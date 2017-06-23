import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './router'
import App from './App';

import 'common/stylus/index.styl';

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
