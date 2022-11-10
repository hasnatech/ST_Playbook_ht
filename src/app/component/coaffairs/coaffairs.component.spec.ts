import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoaffairsComponent } from './coaffairs.component';

describe('CoaffairsComponent', () => {
  let component: CoaffairsComponent;
  let fixture: ComponentFixture<CoaffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoaffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoaffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
