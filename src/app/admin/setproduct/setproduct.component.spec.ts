import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Setproductcomponent } from './set.component';

describe('SetproductComponent', () => {
  let component: Setproductcomponent;
  let fixture: ComponentFixture<Setproductcomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Setproductcomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Setproductcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
