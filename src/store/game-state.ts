/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import {Module, Mutation, VuexModule} from 'vuex-module-decorators';
import FileNotFound from '@/errors/file-not-found';
import store from './store';

const VanillaPath = 'vanilla-path';

const UnpackedPath = 'unpacked-path';

@Module({store, dynamic: true, namespaced: true, name: 'game'})
export default class GameState extends VuexModule {
  vanilla = localStorage.getItem(VanillaPath);

  unpacked = localStorage.getItem(UnpackedPath);

  get vanillaPath(): string | null {
    return this.vanilla;
  }

  get unpackedPath(): string | null {
    return this.unpacked;
  }

  @Mutation
  setVanillaPath(path: string): void {
    FileNotFound.throwIfNotExist(path);
    this.vanilla = path;
    localStorage.setItem(VanillaPath, path);
  }

  @Mutation
  setUnpackedPath(path: string): void {
    FileNotFound.throwIfNotExist(path);
    this.unpacked = path;
    localStorage.setItem(UnpackedPath, path);
  }
};
