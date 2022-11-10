import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloballearningComponent } from './globallearning.component';

describe('GloballearningComponent', () => {
  let component: GloballearningComponent;
  let fixture: ComponentFixture<GloballearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloballearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloballearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
