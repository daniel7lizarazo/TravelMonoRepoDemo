import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarFromLibComponent } from './search-bar-from-lib/search-bar-from-lib.component';
import { CRUDTableFromLibComponent } from './crud-table-from-lib/crud-table-from-lib.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchBarFromLibComponent, CRUDTableFromLibComponent],
  exports: [SearchBarFromLibComponent, CRUDTableFromLibComponent],
})
export class OpiTravelSharableModule {}
