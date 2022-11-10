import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTalentPerformanceComponent } from './global-talent-performance.component';

describe('GlobalTalentPerformanceComponent', () => {
  let component: GlobalTalentPerformanceComponent;
  let fixture: ComponentFixture<GlobalTalentPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalTalentPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTalentPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
