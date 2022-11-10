import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flip3DComponent } from './flip3-d.component';

describe('Flip3DComponent', () => {
  let component: Flip3DComponent;
  let fixture: ComponentFixture<Flip3DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flip3DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flip3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
