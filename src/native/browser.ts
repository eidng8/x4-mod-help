/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

'use strict';

import {app, BrowserWindow} from 'electron';
import {createProtocol} from 'vue-cli-plugin-electron-builder/lib';
import ipc from './ipc';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow | null;

export default function createWindow() {
  if (win) return;

  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  /*
   * https://www.electronjs.org/docs/tutorial/devtools-extension
   * Replace the path with yours, and uncomment the next line to install
   * dev tools. After it's successfully run once, it can be commented out again.
   */
  // BrowserWindow.addDevToolsExtension(
  //  '%LOCALAPPDATA%\Google\Chrome\User
  // Data\Default\Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.3.0_0' )

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    // noinspection JSIgnoredPromiseFromCall
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol('app');
    // Load the index.html when not in development
    // noinspection JSIgnoredPromiseFromCall
    win.loadURL('app://./index.html');
  }

  win.on('closed', () => {
    win = null;
  });

  ipc(win);
}
