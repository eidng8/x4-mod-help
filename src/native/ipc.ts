/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

'use strict';

import {BrowserWindow, ipcMain, nativeTheme} from 'electron';
import {GetTheme, ThemeChanged} from './index';
import {getTheme} from './app';


export default function (win: BrowserWindow | null) {
  nativeTheme.addListener('updated', () => {
    if (win) {
      win.webContents.send(ThemeChanged, getTheme());
    }
  });

  ipcMain.on(GetTheme, evt => console.log(evt.returnValue = getTheme()));
}
