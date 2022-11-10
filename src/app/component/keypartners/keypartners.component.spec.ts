import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypartnersComponent } from './keypartners.component';

describe('KeypartnersComponent', () => {
  let component: KeypartnersComponent;
  let fixture: ComponentFixture<KeypartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeypartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
