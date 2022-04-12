import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisIsNotSharableComponent } from './this-is-not-sharable.component';

describe('ThisIsNotSharableComponent', () => {
  let component: ThisIsNotSharableComponent;
  let fixture: ComponentFixture<ThisIsNotSharableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThisIsNotSharableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisIsNotSharableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
