import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityDaysComponent } from './quantity-days.component';

describe('QuantityDaysComponent', () => {
  let component: QuantityDaysComponent;
  let fixture: ComponentFixture<QuantityDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
