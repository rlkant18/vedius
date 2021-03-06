"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var backend_service_1 = require("../../services/backend.service");
var Setproductcomponent = /** @class */ (function () {
    function Setproductcomponent(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.takeHostSelfie = false;
        this.showHostSelfie = false;
        this.displayedColumns = ['category', 'scategory', 'name', 'price', '_id'];
    }
    Setproductcomponent.prototype.ngOnInit = function () {
        this.toggleField = "searchMode";
        this.dataSource = new material_1.MatTableDataSource(this.members);
        this.currentDate = new Date();
        this.currentDate.setDate(this.currentDate.getDate() + 1);
        this.currentDate7 = new Date();
        this.currentDate7.setDate(this.currentDate.getDate() - 7);
    };
    Setproductcomponent.prototype.toggle = function (filter) {
        this.dataLoading = false;
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
    };
    Setproductcomponent.prototype.getData = function () {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.getproducts('product')
            .subscribe(function (members) {
            _this.members = members;
            _this.dataSource = new material_1.MatTableDataSource(members);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    Setproductcomponent.prototype.getFilterData = function (filters) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.getFilterproducts('product', filters)
            .subscribe(function (members) {
            _this.members = members;
            _this.dataSource = new material_1.MatTableDataSource(members);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    Setproductcomponent.prototype.setData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setproducts()
            .subscribe(function (members) {
            if (members) {
                _this.savedChanges = true;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () { _this.error = false; _this.dataLoading = false; });
    };
    Setproductcomponent.prototype.updateData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setproducts()
            .subscribe(function (members) {
            if (members) {
                _this.savedChanges = true;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () { _this.error = false; _this.dataLoading = false; });
    };
    // getPic(picId) {
    //   const ref = this._storage.ref(picId);
    //   this.profileUrl = ref.getDownloadURL();
    // }
    // deleteproductPic(docId) {
    //   if (confirm("Are you sure want to delete this picture ?")) {
    //     this._backendService.deleteproductPic('product', docId);
    //   }
    // }
    Setproductcomponent.prototype.getDoc = function (docId) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.getOneproductDoc('product', FormData)
            .subscribe(function (res) {
            if (res) {
                _this.myDocData = res;
                _this.toggle('editMode');
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () { _this.error = false; _this.dataLoading = false; });
    };
    Setproductcomponent.prototype.deleteDoc = function (docId) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this.dataLoading = true;
            this.querySubscription = this._backendService.delOneproductDoc('product', FormData)
                .subscribe(function (res) {
                if (res) {
                    _this.toggle('searchMode');
                }
            }, function (error) {
                _this.error = true;
                _this.errorMessage = error.message;
                _this.dataLoading = false;
            }, function () { _this.error = false; _this.dataLoading = false; });
        }
    };
    //mat table paginator and filter functions
    Setproductcomponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Setproductcomponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    Setproductcomponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    __decorate([
        core_1.ViewChild('MatPaginator'),
        __metadata("design:type", material_1.MatPaginator)
    ], Setproductcomponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('MatSort'),
        __metadata("design:type", material_1.MatSort)
    ], Setproductcomponent.prototype, "sort", void 0);
    Setproductcomponent = __decorate([
        core_1.Component({
            selector: 'set-product',
            templateUrl: './setproduct.component.html'
        }),
        __metadata("design:paramtypes", [backend_service_1.BackendService])
    ], Setproductcomponent);
    return Setproductcomponent;
}());
exports.Setproductcomponent = Setproductcomponent;
//# sourceMappingURL=set.component.js.map