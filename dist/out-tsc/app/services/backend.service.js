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
var rxjs_1 = require("rxjs");
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.prototype.getCartTotal = function () {
        var fakeresponse = "10";
        return rxjs_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(fakeresponse);
            }, 2000);
        });
    };
    BackendService.prototype.getUserStatus = function () {
        var fakeresponse = "true";
        return rxjs_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(fakeresponse);
            }, 2000);
        });
    };
    BackendService.prototype.getproducts = function (collType) {
        var fakeresponse = [{
                'category': "test",
                'scategory': "Test",
                'name': "product name",
                'price': "100",
                '_id': "123456789"
            }];
        return rxjs_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(fakeresponse);
            }, 2000);
        });
    };
    BackendService.prototype.getFilterproducts = function (collType, filters) {
        var fakeresponse = [{
                'category': "test",
                'scategory': "Test",
                'name': "product name",
                'price': "3000",
                '_id': "123456789"
            }];
        return rxjs_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(fakeresponse);
            }, 2000);
        });
    };
    BackendService.prototype.setproducts = function () {
        var fakeresponse = "true";
        return rxjs_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(fakeresponse);
            }, 2000);
        });
    };
    BackendService.prototype.getOneproductDoc = function (collType, docId) {
        var fakeresponse = {
            'category': "test",
            'scategory': "Test",
            'name': "product name",
            'price': "3000",
            '_id': "123456789"
        };
        return rxjs_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(fakeresponse);
            }, 2000);
        });
    };
    BackendService.prototype.delOneproductDoc = function (collType, docId) {
        var fakeresponse = true;
        return rxjs_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(fakeresponse);
            }, 2000);
        });
    };
    BackendService.prototype.updateShoppingInterest = function (collType, data) {
        var fakeresponse = true;
        return rxjs_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(fakeresponse);
            }, 2000);
        });
    };
    BackendService.prototype.updateShoppingCart = function (collType, data) {
        var fakeresponse = true;
        return rxjs_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(fakeresponse);
            }, 2000);
        });
    };
    BackendService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=backend.service.js.map