import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from 'src/app/shared/router.animation';

@Component({
  selector: 'carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn': '' }
})
export class CartsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
