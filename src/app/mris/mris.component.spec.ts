import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrisComponent } from './mris.component';

describe('MrisComponent', () => {
  let component: MrisComponent;
  let fixture: ComponentFixture<MrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
