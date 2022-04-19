import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'opi-travel-demo-search-bar-from-lib',
  templateUrl: './search-bar-from-lib.component.html',
  styleUrls: ['./search-bar-from-lib.component.scss'],
})


export class SearchBarFromLibComponent {

  @Output()
  searchEntry = new EventEmitter<string>();

  search(entry : string){
    this.searchEntry.emit(entry);
  }

}
