import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarFromLibComponent } from './search-bar-from-lib/search-bar-from-lib.component';
import { CRUDTableFromLibComponent } from './crud-table-from-lib/crud-table-from-lib.component';
import { OpiTravelDomainModule } from '@opi-travel-demo/opi-travel-domain';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [CommonModule, OpiTravelDomainModule, BrowserAnimationsModule, MatInputModule, MatFormFieldModule],
  declarations: [SearchBarFromLibComponent, CRUDTableFromLibComponent],
  exports: [SearchBarFromLibComponent, CRUDTableFromLibComponent],
})
export class OpiTravelSharableModule {}
