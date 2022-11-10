import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalinclusionComponent } from './globalinclusion.component';

describe('GlobalinclusionComponent', () => {
  let component: GlobalinclusionComponent;
  let fixture: ComponentFixture<GlobalinclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalinclusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalinclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
