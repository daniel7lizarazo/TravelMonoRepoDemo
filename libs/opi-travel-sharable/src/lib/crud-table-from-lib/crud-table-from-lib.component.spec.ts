import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDTableFromLibComponent } from './crud-table-from-lib.component';

describe('CRUDTableFromLibComponent', () => {
  let component: CRUDTableFromLibComponent;
  let fixture: ComponentFixture<CRUDTableFromLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CRUDTableFromLibComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDTableFromLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
