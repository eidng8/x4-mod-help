/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

'use strict';

import {BrowserWindow, ipcMain, nativeTheme} from 'electron';

export default function (win: BrowserWindow | null) {
  nativeTheme.addListener('updated', () => {
    if (win && nativeTheme.shouldUseDarkColors) {
      win.webContents.send('system-theme-changed', 'dark');
    }
  });

  ipcMain.on('get-system-theme', evt => {
    evt.returnValue = win && nativeTheme.shouldUseDarkColors;
  });
}
