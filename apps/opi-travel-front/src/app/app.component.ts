import { Component, OnInit } from '@angular/core';
import { IConfigurationAccounts } from '@opi-travel-demo/opi-travel-domain';
import { TableDataService } from './services/table-data.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'opi-travel-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{

  isPusheado$ = false;
  tableData$ : Array<IConfigurationAccounts> = [];

  constructor(private readonly dataService: TableDataService) {
  }
  ngOnInit(): void {
    this.getAllConfigurations();
  }

  async getAllConfigurations() : Promise<void> {
    this.tableData$ = await this.dataService.getData();
  }

  async findConfiguration(entry : string) : Promise<void> {
    this.tableData$ = await this.dataService.getSpecificData(entry);
  }

  // async pushInfoInDB() : Promise<boolean> {
  //   this.isPusheado$ = await this.dataService.pushData('Primera prueba');
  //   return this.isPusheado$;
  // }

}
