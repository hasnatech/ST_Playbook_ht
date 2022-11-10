import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TMslide1Component } from './tmslide1.component';

describe('TMslide1Component', () => {
  let component: TMslide1Component;
  let fixture: ComponentFixture<TMslide1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TMslide1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TMslide1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
