import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tmslide2Component } from './tmslide2.component';

describe('Tmslide2Component', () => {
  let component: Tmslide2Component;
  let fixture: ComponentFixture<Tmslide2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tmslide2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tmslide2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
