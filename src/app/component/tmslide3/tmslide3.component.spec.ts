import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tmslide3Component } from './tmslide3.component';

describe('Tmslide3Component', () => {
  let component: Tmslide3Component;
  let fixture: ComponentFixture<Tmslide3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tmslide3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tmslide3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
