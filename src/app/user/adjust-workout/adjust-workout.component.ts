import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl
} from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'adjust-workout',
  templateUrl: './adjust-workout.component.html',
  styleUrls: ['./adjust-workout.component.css']
})
export class AdjustWorkoutComponent implements OnInit {
  repetition: FormGroup;
  repetitions = new FormControl();
  repetitionList: string[] = [
    'Balance/Proprioception',
    'Joint Mobilisation',
    'Mobility',
    'Muscular Endurance',
    'Myofascial Release',
    'Neural Mobilisation',
    'Plyometrics',
    'ROM',
    'Strength',
    'Stretch',
    'Taping'
  ];

  constructor() {}

  ngOnInit() {}
}
