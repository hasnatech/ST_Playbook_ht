import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobaltalentComponent } from './globaltalent.component';

describe('GlobaltalentComponent', () => {
  let component: GlobaltalentComponent;
  let fixture: ComponentFixture<GlobaltalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobaltalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobaltalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
