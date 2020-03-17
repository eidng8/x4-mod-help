/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import Dexie from 'dexie';

export default class DataTable<T, K> {
  protected ds: Dexie;
  protected dt: Dexie.Table<T, K>;

  constructor(store: Dexie, table: Dexie.Table<T, K>) {
    this.ds = store;
    this.dt = table;
  }

  public put(item: T, key?: K) {
    return this.ds.transaction('rw', this.dt, () => {
      return this.dt.put(item, key);
    });
  }
}
