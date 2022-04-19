import { Component, Input, OnInit } from '@angular/core';
import { IConfigurationAccounts } from '@opi-travel-demo/opi-travel-domain';

@Component({
  selector: 'opi-travel-demo-crud-table-from-lib',
  templateUrl: './crud-table-from-lib.component.html',
  styleUrls: ['./crud-table-from-lib.component.scss'],
})
export class CRUDTableFromLibComponent {

  @Input()
  tableData! : Array<IConfigurationAccounts>;

  // constructor() {}

}
