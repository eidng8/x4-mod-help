/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import {existsSync} from 'fs';

export default class FileNotFound extends Error {
  static throwIfNotExist(path: string) {
    if (!existsSync(path)) throw new FileNotFound(path);
  }

  constructor(path: string) {
    super(`File not found: ${path}`);
  }
}
