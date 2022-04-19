import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { OpiTravelSharableModule } from '@opi-travel-demo/opi-travel-sharable'
import { TableDataService } from './services/table-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, OpiTravelSharableModule, BrowserAnimationsModule],
  providers: [TableDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
