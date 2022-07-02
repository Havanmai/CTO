import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningConfigComponent } from './warning-config.component';

describe('WarningConfigComponent', () => {
  let component: WarningConfigComponent;
  let fixture: ComponentFixture<WarningConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
