import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LossWarningComponent } from './loss-warning.component';

describe('LossWarningComponent', () => {
  let component: LossWarningComponent;
  let fixture: ComponentFixture<LossWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LossWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LossWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
