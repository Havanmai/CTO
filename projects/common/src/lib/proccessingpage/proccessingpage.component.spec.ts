import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccessingpageComponent } from './proccessingpage.component';

describe('ProccessingpageComponent', () => {
  let component: ProccessingpageComponent;
  let fixture: ComponentFixture<ProccessingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProccessingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProccessingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
