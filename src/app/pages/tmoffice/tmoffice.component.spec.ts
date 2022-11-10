import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TMofficeComponent } from './tmoffice.component';

describe('TMofficeComponent', () => {
  let component: TMofficeComponent;
  let fixture: ComponentFixture<TMofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TMofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TMofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
