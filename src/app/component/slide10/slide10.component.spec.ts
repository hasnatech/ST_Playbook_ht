import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide10Component } from './slide10.component';

describe('Slide10Component', () => {
  let component: Slide10Component;
  let fixture: ComponentFixture<Slide10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
