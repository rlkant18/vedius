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
var snack_bar_1 = require("@angular/material/snack-bar");
var forms_1 = require("@angular/forms");
var AdjustWorkoutComponent = /** @class */ (function () {
    function AdjustWorkoutComponent(_snackBar) {
        this._snackBar = _snackBar;
        this.repetitions = new forms_1.FormControl();
        this.repetitionList = [
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
    }
    AdjustWorkoutComponent.prototype.ngOnInit = function () { };
    AdjustWorkoutComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 2000
        });
    };
    AdjustWorkoutComponent = __decorate([
        core_1.Component({
            selector: 'adjust-workout',
            templateUrl: './adjust-workout.component.html',
            styleUrls: ['./adjust-workout.component.css']
        }),
        __metadata("design:paramtypes", [snack_bar_1.MatSnackBar])
    ], AdjustWorkoutComponent);
    return AdjustWorkoutComponent;
}());
exports.AdjustWorkoutComponent = AdjustWorkoutComponent;
//# sourceMappingURL=adjust-workout.component.js.map