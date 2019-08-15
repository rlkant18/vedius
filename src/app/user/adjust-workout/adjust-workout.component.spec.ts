import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustWorkoutComponent } from './adjust-workout.component';

describe('AdjustWorkoutComponent', () => {
  let component: AdjustWorkoutComponent;
  let fixture: ComponentFixture<AdjustWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
