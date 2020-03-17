/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

import Dexie from 'dexie';
import DataTable from './DataTable';

export default class DataStore {
  public static readonly VERSION = 1;

  private static _instance: DataStore;

  private db: Dexie = new Dexie('handbook');

  private constructor() {
    this.db.version(DataStore.VERSION).stores({
      language: '[language+page+id]',
    });
    this.db.open().catch(err => {
      throw err;
    });
  }

  public static get ds(): DataStore {
    if (DataStore._instance) {
      return DataStore._instance;
    }

    DataStore._instance = new DataStore();
    return DataStore._instance;
  }

  public static table<T, K>(name: string): DataTable<T, K> {
    const db = DataStore.ds.db;
    return new DataTable<T, K>(db, db.table(name));
  }
}
