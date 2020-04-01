/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import {getModule} from 'vuex-module-decorators';
import {GameState} from '@/store';

describe('game-state', () => {
  test('it has vanilla path', () => {
    expect.assertions(1);
    const state = getModule(GameState);
    state.setVanillaPath('123abc');
    expect(state.vanillaPath).toBe('123abc');
  });

  test('it has unpacked path', () => {
    expect.assertions(1);
    const state = getModule(GameState);
    state.setUnpackedPath('123abc');
    expect(state.unpackedPath).toBe('123abc');
  });
});
