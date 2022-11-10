import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide5Component } from './slide5.component';

describe('Slide5Component', () => {
  let component: Slide5Component;
  let fixture: ComponentFixture<Slide5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
