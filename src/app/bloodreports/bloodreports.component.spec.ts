import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodreportsComponent } from './bloodreports.component';

describe('BloodreportsComponent', () => {
  let component: BloodreportsComponent;
  let fixture: ComponentFixture<BloodreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
