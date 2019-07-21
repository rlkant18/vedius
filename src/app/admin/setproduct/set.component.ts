import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'set-product',
  templateUrl: './setproduct.component.html'
})
export class Setproductcomponent implements OnInit, OnDestroy {

  members: any[];
  dataSource: MatTableDataSource<any>;
  myDocData: any[];
  data;
  currentDate;
  currentDate7;
  toggleField: string;
  state: string = '';
  savedChanges = false;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;

  profileUrl: Observable<string | null>;
  takeHostSelfie = false;
  showHostSelfie = false;
  myDocId;

  @ViewChild('MatPaginator') paginator: MatPaginator;
  @ViewChild('MatSort') sort: MatSort;
  displayedColumns = ['category', 'scategory', 'name', 'price', '_id'];

  constructor(private _backendService: BackendService) { }
  

  ngOnInit() {
    this.toggleField = "searchMode";
    this.dataSource = new MatTableDataSource(this.members);
    this.currentDate = new Date();
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.currentDate7 = new Date();
    this.currentDate7.setDate(this.currentDate.getDate() - 7);
  }

  toggle(filter?) {
    this.dataLoading = false;
    if (!filter) { filter = "searchMode" }
    else { filter = filter; }
    this.toggleField = filter;
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getproducts('product')
      .subscribe(members => {
        this.members = members;
        this.dataSource = new MatTableDataSource(members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getFilterproducts('product', filters)
      .subscribe(members => {
        this.members = members;
        this.dataSource = new MatTableDataSource(members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  setData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setproducts()
      .subscribe(members => {
        if (members) {
          this.savedChanges = true;
        }
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => { this.error = false; this.dataLoading = false; })

  }

  updateData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setproducts()
      .subscribe(members => {
        if (members) {
          this.savedChanges = true;
        }
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => { this.error = false; this.dataLoading = false; })

  }

  // getPic(picId) {
  //   const ref = this._storage.ref(picId);
  //   this.profileUrl = ref.getDownloadURL();
  // }
  // deleteproductPic(docId) {
  //   if (confirm("Are you sure want to delete this picture ?")) {
  //     this._backendService.deleteproductPic('product', docId);
  //   }
  // }

  getDoc(docId) {
   this.dataLoading = true;
    this.querySubscription = this._backendService.getOneproductDoc('product', FormData)
      .subscribe(res => {
        if (res) {
          this.myDocData = res;
          this.toggle('editMode');
        }
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => { this.error = false; this.dataLoading = false; })
  }

  deleteDoc(docId) {
    if(confirm("Are you sure you want to delete this record?")){
    this.dataLoading = true;
     this.querySubscription = this._backendService.delOneproductDoc('product', FormData)
       .subscribe(res => {
         if (res) {
           this.toggle('searchMode');
         }
       },
         (error) => {
           this.error = true;
           this.errorMessage = error.message;
           this.dataLoading = false;
         },
         () => { this.error = false; this.dataLoading = false; })
        }
   }

  //mat table paginator and filter functions
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnDestroy() {

    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}