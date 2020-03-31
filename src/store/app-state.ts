/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import {Module, Mutation, VuexModule} from 'vuex-module-decorators';
import store from './store';

const AutoOpenLast = 'auto-open-last';

@Module({store, dynamic: true, namespaced: true, name: 'app'})
export default class AppState extends VuexModule {
  autoOpenLast = !!localStorage.getItem(AutoOpenLast);

  get shouldOpenLast(): boolean {
    return this.autoOpenLast;
  }

  @Mutation
  setAutoOpenLast(auto: boolean): void {
    this.autoOpenLast = auto;
    localStorage.setItem(AutoOpenLast, auto ? '1' : '');
  }
};
