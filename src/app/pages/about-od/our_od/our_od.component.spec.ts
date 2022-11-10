import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Our_ODComponent } from './our_od.component';

describe('Our_ODComponent', () => {
  let component: Our_ODComponent;
  let fixture: ComponentFixture<Our_ODComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Our_ODComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Our_ODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
