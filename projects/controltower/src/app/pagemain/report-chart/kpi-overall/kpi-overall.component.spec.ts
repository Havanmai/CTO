import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPIOverallComponent } from './kpi-overall.component';

describe('KPIOverallComponent', () => {
  let component: KPIOverallComponent;
  let fixture: ComponentFixture<KPIOverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KPIOverallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KPIOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
