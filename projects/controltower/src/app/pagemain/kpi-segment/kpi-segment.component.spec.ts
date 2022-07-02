import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPISegmentComponent } from './kpi-segment.component';

describe('KPISegmentComponent', () => {
  let component: KPISegmentComponent;
  let fixture: ComponentFixture<KPISegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KPISegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KPISegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
