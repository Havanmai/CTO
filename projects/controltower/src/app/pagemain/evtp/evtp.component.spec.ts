import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtpComponent } from './evtp.component';

describe('EvtpComponent', () => {
  let component: EvtpComponent;
  let fixture: ComponentFixture<EvtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
