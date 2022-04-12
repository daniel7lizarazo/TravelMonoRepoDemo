import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThisIsNotSharableComponent } from './this-is-not-sharable/this-is-not-sharable.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ThisIsNotSharableComponent],
  exports: [ThisIsNotSharableComponent],
})
export class OpiNotSharableModule {}
