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
var forms_1 = require("@angular/forms");
//import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var platform_browser_1 = require("@angular/platform-browser");
var material_2 = require("@angular/material");
var CustommaterialModule = /** @class */ (function () {
    function CustommaterialModule(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('fb', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg'));
        iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
        iconRegistry.addSvgIcon('git', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    }
    CustommaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
                material_1.MatFormFieldModule,
                material_1.MatDialogModule,
                material_1.MatTabsModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatMenuModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatSelectModule,
                material_1.MatToolbarModule,
                material_1.MatCardModule,
                material_1.MatChipsModule,
                material_1.MatListModule,
                material_1.MatTooltipModule,
                material_1.MatNativeDateModule,
                material_1.MatDatepickerModule,
                material_1.MatTableModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatSortModule,
                material_1.MatSnackBarModule,
                material_1.MatStepperModule,
                material_1.MatGridListModule,
                material_1.MatBadgeModule,
                material_1.MatExpansionModule,
                material_1.MatRadioModule,
                material_1.MatSidenavModule
            ],
            exports: [
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonModule,
                material_1.MatFormFieldModule,
                material_1.MatCheckboxModule,
                material_1.MatTabsModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatMenuModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatSelectModule,
                material_1.MatToolbarModule,
                material_1.MatCardModule,
                material_1.MatChipsModule,
                material_1.MatListModule,
                material_1.MatTooltipModule,
                material_1.MatNativeDateModule,
                material_1.MatDatepickerModule,
                material_1.MatTableModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatSortModule,
                material_1.MatSnackBarModule,
                material_1.MatStepperModule,
                material_1.MatGridListModule,
                material_1.MatBadgeModule,
                material_1.MatExpansionModule,
                material_1.MatRadioModule,
                material_1.MatSidenavModule
            ],
            declarations: []
        }),
        __metadata("design:paramtypes", [material_2.MatIconRegistry, platform_browser_1.DomSanitizer])
    ], CustommaterialModule);
    return CustommaterialModule;
}());
exports.CustommaterialModule = CustommaterialModule;
//# sourceMappingURL=custommaterial.module.js.map