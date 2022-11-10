import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicComponent } from './strategic.component';

describe('StrategicComponent', () => {
  let component: StrategicComponent;
  let fixture: ComponentFixture<StrategicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
