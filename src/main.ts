/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';
import './scss/customize.scss';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
