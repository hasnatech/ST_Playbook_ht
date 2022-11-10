import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOdComponent } from './about-od.component';

describe('AboutOdComponent', () => {
  let component: AboutOdComponent;
  let fixture: ComponentFixture<AboutOdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
