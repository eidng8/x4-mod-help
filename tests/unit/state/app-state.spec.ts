/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import {getModule} from 'vuex-module-decorators';
import {AppState} from '@/store';

describe('app-state', () => {
  test('it has auto open last state', () => {
    expect.assertions(2);
    const state = getModule(AppState);
    state.setAutoOpenLast(true);
    expect(state.shouldOpenLast).toBeTruthy();
    state.setAutoOpenLast(false);
    expect(state.shouldOpenLast).toBeFalsy();
  });
});
