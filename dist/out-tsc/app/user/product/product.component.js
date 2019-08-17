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
var backend_service_1 = require("src/app/services/backend.service");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var adjust_workout_component_1 = require("../adjust-workout/adjust-workout.component");
var productComponent = /** @class */ (function () {
    function productComponent(_backendService, fb, dialog) {
        this._backendService = _backendService;
        this.dialog = dialog;
        this.toggle = true;
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = '';
        this.dataLoading = false;
        this.counter = 0;
        this.objectives = new forms_1.FormControl();
        this.objectivesList = [
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
        this.joints = new forms_1.FormControl();
        this.jointsList = [
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
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }
    productComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getData();
        var start;
        var grid = new Map([
            ['xs', 3],
            ['sm', 3],
            ['md', 3],
            ['lg', 4],
            ['xl', 5]
        ]);
        grid.forEach(function (cols, mqAlias) {
            if (_this.observableMedia.isActive(mqAlias)) {
                start = cols;
            }
        });
        this.cols = this.observableMedia
            .asObservable()
            .map(function (change) {
            return grid.get(change.mqAlias);
        })
            .startWith(start);
    };
    productComponent.prototype.getFilterData = function (filters) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService
            .getFilterproducts('product', filters)
            .subscribe(function (members) {
            _this.members = members;
            _this.dataLoading = false;
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.error = false;
            _this.dataLoading = false;
        });
    };
    productComponent.prototype.getData = function () {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService
            .getproducts('product')
            .subscribe(function (members) {
            _this.members = members;
            _this.dataLoading = false;
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.error = false;
            _this.dataLoading = false;
        });
    };
    productComponent.prototype.getPic = function (picId) {
        this.profileUrl = '';
    };
    productComponent.prototype.showDetails = function (item) {
        var _this = this;
        this.counter = 0;
        this.myDocData = item;
        this.getPic(item.path);
        this.dataLoading = true;
        var data = item;
        this.dataLoading = false;
        this.querySubscription = this._backendService
            .updateShoppingInterest('interests', data)
            .subscribe(function (members) {
            _this.dataLoading = false;
            _this.counter = 0;
            _this.savedChanges = true;
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.error = false;
            _this.dataLoading = false;
        });
    };
    productComponent.prototype.countProd = function (filter) {
        if (filter == 'add') {
            this.counter = this.counter + 1;
        }
        else {
            if (this.counter > 0) {
                this.counter = this.counter - 1;
            }
        }
    };
    productComponent.prototype.addToCart = function (item, counter) {
        var _this = this;
        this.dataLoading = true;
        var data = item;
        data.qty = counter;
        this.querySubscription = this._backendService
            .updateShoppingCart('cart', data)
            .subscribe(function (members) {
            _this.dataLoading = false;
            _this.counter = 0;
            _this.savedChanges = true;
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.error = false;
            _this.dataLoading = false;
        });
    };
    productComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(adjust_workout_component_1.AdjustWorkoutComponent, {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    productComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        }),
        __metadata("design:paramtypes", [backend_service_1.BackendService,
            forms_1.FormBuilder,
            material_1.MatDialog])
    ], productComponent);
    return productComponent;
}());
exports.productComponent = productComponent;
//# sourceMappingURL=product.component.js.map