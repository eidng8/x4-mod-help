/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import '@/assets/themes/dark/index.css';
// import fs from 'fs';
import {ipcRenderer} from 'electron';
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from '@/App.vue';
import store from '@/store';
// import DataStore from './db/DataStore';
// import './scss/customize.scss';

const mode = ipcRenderer.sendSync('get-system-theme');
console.log(mode);

ipcRenderer.on('system-theme-changed', (evt, theme) => console.log(theme));

Vue.use(ElementUI);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

// function language2Db() {
//   const file = `${store.state.paths.unpacked}/t/0001-L044.xml`;
//   fs.readFile(file, {encoding: 'utf-8'}, (err, data) => {
//     if (err) {
//       throw err;
//     }
//     const xml = new DOMParser();
//     const doc = xml.parseFromString(data, 'text/xml');
//
//     const root = doc.firstElementChild;
//     if (!root) {
//       throw Error('Empty document.');
//     }
//     const lang = root.getAttribute('id');
//     for (const page of root.children) {
//       const pid = page.getAttribute('id');
//       for (const item of page.children) {
//         // console.log(`${lang},${pid},${item.getAttribute('id')}`);
//         // console.log(item.textContent);
//         DataStore.table('language').put({
//           language: lang,
//           page: pid,
//           id: item.getAttribute('id'),
//           text: item.textContent,
//         }).catch(err => {
//           throw err;
//         });
//       }
//     }
//   });
// }

// language2Db();
