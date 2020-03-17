/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import Dexie from 'dexie';

class DataStore {

  public static readonly VERSION = 1;

  private static instance: DataStore;

  private db: Dexie = new Dexie('handbook');

  private DataStore() {
    this.db.version(DataStore.VERSION).stores({
      ships: '++id,name,description',
    });
  }

  public ds() {
    if (DataStore.instance) {
      return DataStore.instance;
    }

    DataStore.instance = new DataStore();
    return DataStore.instance;
  }
}
