import { Injectable } from '@angular/core';
import { IConfigurationAccounts } from '@opi-travel-demo/opi-travel-domain';
import { fromEvent } from 'rxjs';
// import { JsonDB } from 'node-json-db';
// import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  dataForTables : Array<IConfigurationAccounts> = [
      {
        configurationName: 'Login',
        value: 'Available',
        actions: {
          edit: true,
          delete: false,
          view: true
        }

      },
      {
        configurationName: 'Reset password',
        value: 'One attempt',
        actions: {
          edit: true,
          delete: true,
          view: false
        }
      },
      {
        configurationName: 'Timeout',
        value: '10 minutes',
        actions: {
          edit: true,
          delete: false,
          view: false
        }
      },
      {
        configurationName: 'Personalized theme',
        value: 'Avaailable',
        actions: {
          edit: true,
          delete: false,
          view: true
        }
      }
    ]
// db = new JsonDB(new Config("db", true, false, '/'));

  getData(): Promise<Array<IConfigurationAccounts>> {
    return Promise.resolve(this.dataForTables)
  }

  getSpecificData(searchedName : string): Promise<Array<IConfigurationAccounts>> {
    return Promise.resolve(this.dataForTables.filter( fromTable => fromTable.configurationName === searchedName) ?? this.dataForTables);
  }
}
