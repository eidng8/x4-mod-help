/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */


export default {
  state() {
    return {
      paths: {
        vanilla: localStorage.getItem('vanilla-path'),
        unpacked: localStorage.getItem('unpacked-path'),
      },
    };
  },
  mutations: {},
  actions: {},
  modules: {},
};
