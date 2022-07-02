import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityMonthsComponent } from './quantity-months.component';

describe('QuantityMonthsComponent', () => {
  let component: QuantityMonthsComponent;
  let fixture: ComponentFixture<QuantityMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityMonthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
