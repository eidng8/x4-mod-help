/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import {Module, Mutation, VuexModule} from 'vuex-module-decorators';
import FileNotFound from '@/errors/file-not-found';
import store from './store';

const ModsPath = 'mods-path';

const LastMod = 'last-mods';

@Module({store, dynamic: true, namespaced: true, name: 'mods'})
export default class ModsState extends VuexModule {
  mods = localStorage.getItem(ModsPath);

  last = localStorage.getItem(LastMod);

  get modsPath(): string | null {
    return this.mods;
  }

  get lastMod(): string | null {
    return this.last;
  }

  @Mutation
  setModsPath(path: string): void {
    FileNotFound.throwIfNotExist(path);
    this.mods = path;
    localStorage.setItem(ModsPath, path);
  }

  @Mutation
  setLastMod(name: string): void {
    this.last = name;
    localStorage.setItem(LastMod, name);
  }
};
