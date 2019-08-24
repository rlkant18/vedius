import { BackendService } from './../../services/backend.service';
import { Component, OnInit, Input } from '@angular/core';
import { CartsComponent } from '../../user/carts/carts.component';

import {
  MatTableDataSource,
  MatDrawer,
  MatSidenav,
  MatDialogModule,
  MatDialogConfig,
  MatDialog
} from '@angular/material';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() iconTitle: string;
  @Input() helpTitle: string;
  configData;
  counter = 0;
  userStatusColor = 'warn';

  constructor(
    private _backendservice: BackendService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.counter = 0;
    this.configData = this._backendservice.getCartTotal();
    this._backendservice.getCartTotal().subscribe(res => {
      this.counter = res;
    });
    this._backendservice.getUserStatus().subscribe(res => {
      this.userStatusColor = res ? 'primary' : 'warn';
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CartsComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
