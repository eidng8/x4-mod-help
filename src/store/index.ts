/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paths: {
      unpacked: localStorage.getItem('unpacked-path'),
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
