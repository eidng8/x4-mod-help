/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import Vue from 'vue';
import Vuex from 'vuex';
import app from './app';
import game from './game';
import mods from './mods';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {app, game, mods},
});
