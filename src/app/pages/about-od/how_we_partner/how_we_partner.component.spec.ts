import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { How_we_partnerComponent } from './how_we_partner.component';

describe('How_we_partnerComponent', () => {
  let component: How_we_partnerComponent;
  let fixture: ComponentFixture<How_we_partnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ How_we_partnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(How_we_partnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
