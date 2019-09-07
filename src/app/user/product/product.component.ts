import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Observable } from 'rxjs';
import {
  NgbModal,
  NgbModalRef,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';

import {
  MatTableDataSource,
  MatDrawer,
  MatSidenav,
  MatDialogModule,
  MatDialogConfig,
  MatDialog
} from '@angular/material';
import {
  FormGroup,
  FormBuilder,
  FormControl
} from '@angular/forms';
import { AdjustWorkoutComponent } from '../adjust-workout/adjust-workout.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class productComponent implements OnInit {
  toggle: boolean = true;
  savedChanges = false;
  error: boolean = false;
  errorMessage: String = '';
  dataLoading: boolean = false;
  private querySubscription;
  members: Observable<any>;
  profileUrl: String;
  myDocId;
  counter = 0;
  myDocData;
  public cols: Observable<number>;

  options: FormGroup;
  objectives = new FormControl();
  objectivesList: string[] = [
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
  joints = new FormControl();
  jointsList: string[] = [
    'Cervical',
    'Elbow',
    'Foot & Ankle',
    'Hip',
    'Knee',
    'Lumbar',
    'Scapula',
    'Shoulder',
    'TMJ',
    'Thoracic',
    'Wrist & Hand'
  ];

  constructor(
    private _backendService: BackendService,
    fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  ngOnInit() {
    this.getData();
  }

  getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this._backendService
      .getFilterproducts('product', filters)
      .subscribe(
        members => {
          this.members = members;
          this.dataLoading = false;
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService
      .getproducts('product')
      .subscribe(
        members => {
          this.members = members;
          this.dataLoading = false;
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }

  getPic(picId) {
    this.profileUrl = '';
  }

  showDetails(item) {
    this.counter = 0;
    this.myDocData = item;
    this.getPic(item.path);
    this.dataLoading = true;
    let data = item;
    this.dataLoading = false;

    this.querySubscription = this._backendService
      .updateShoppingInterest('interests', data)
      .subscribe(
        members => {
          this.dataLoading = false;
          this.counter = 0;
          this.savedChanges = true;
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }

  countProd(filter) {
    if (filter == 'add') {
      this.counter = this.counter + 1;
    } else {
      if (this.counter > 0) {
        this.counter = this.counter - 1;
      }
    }
  }

  addToCart(item, counter) {
    this.dataLoading = true;
    let data = item;
    data.qty = counter;

    this.querySubscription = this._backendService
      .updateShoppingCart('cart', data)
      .subscribe(
        members => {
          this.dataLoading = false;
          this.counter = 0;
          this.savedChanges = true;
        },

        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(
      AdjustWorkoutComponent,
      {}
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  tiles = [
    {
      cols: 1,
      rows: 1,
      color: '#D9EDD9',
      src: '../assets/videos/IMG_1756.mp4',
      Type: 'video/mp4'
    },
    {
      cols: 1,
      rows: 1,
      color: '#D9EDD9',
      src: '../assets/videos/IMG_1757.mp4',
      Type: 'video/mp4'
    },
    {
      cols: 1,
      rows: 1,
      color: '#D9EDD9',
      src: '../assets/videos/IMG_1758.mp4',
      Type: 'video/mp4'
    },
    {
      cols: 1,
      rows: 1,
      color: '#D9EDD9',
      src: '../assets/videos/IMG_1759.mp4',
      Type: 'video/mp4'
    },
    {
      cols: 1,
      rows: 1,
      color: '#D9EDD9',
      src: '../assets/videos/IMG_1760.mp4',
      Type: 'video/mp4'
    },
    {
      cols: 1,
      rows: 1,
      color: '#D9EDD9',
      src: '../assets/videos/IMG_1761.mp4',
      Type: 'video/mp4'
    },
    {
      cols: 1,
      rows: 1,
      color: '#D9EDD9',
      src: '../assets/videos/IMG_1762.mp4',
      Type: 'video/mp4'
    },
    {
      cols: 1,
      rows: 1,
      color: '#D9EDD9',
      src: '../assets/videos/IMG_1763.mp4',
      Type: 'video/mp4'
    },
    {
      cols: 1,
      rows: 1,
      color: '#D9EDD9',
      src: '../assets/videos/IMG_1764.mp4',
      Type: 'video/mp4'
    }
  ];
}
