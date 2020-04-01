/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import {Module, Mutation, VuexModule} from 'vuex-module-decorators';
import store from './store';

const ModsPath = 'mods-path';

const LastMods = 'last-mods';

@Module({store, dynamic: true, namespaced: true, name: 'mods'})
export default class ModsState extends VuexModule {
  private mods = localStorage.getItem(ModsPath);

  private last: string[] = JSON.parse(localStorage.getItem(LastMods) || '[]');

  get modsPath(): string | null {
    return this.mods;
  }

  get lastMods(): string[] {
    return this.last;
  }

  @Mutation
  setModsPath(path: string): void {
    this.mods = path;
    localStorage.setItem(ModsPath, path);
  }

  @Mutation
  pushLastMod(name: string): void {
    this.last.push(name);
    localStorage.setItem(LastMods, JSON.stringify(name));
  }
};
