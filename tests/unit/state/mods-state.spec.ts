/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import {getModule} from 'vuex-module-decorators';
import {ModsState} from '@/store';

describe('mods-state', () => {
  test('it has mod path', () => {
    expect.assertions(1);
    const state = getModule(ModsState);
    state.setModsPath('123abc');
    expect(state.modsPath).toBe('123abc');
  });
});
