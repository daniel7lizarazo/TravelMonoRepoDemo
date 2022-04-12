import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarFromLibComponent } from './search-bar-from-lib.component';

describe('SearchBarFromLibComponent', () => {
  let component: SearchBarFromLibComponent;
  let fixture: ComponentFixture<SearchBarFromLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarFromLibComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarFromLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
