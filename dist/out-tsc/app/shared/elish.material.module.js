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
var productCustomMaterialModule = /** @class */ (function () {
    function productCustomMaterialModule(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('more_vert', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/more_vert.svg'));
        iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg'));
        iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
        iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
        iconRegistry.addSvgIcon('dashboard-black', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard-black.svg'));
        iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
        iconRegistry.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
        iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
        iconRegistry.addSvgIcon('account_circle', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account_circle.svg'));
        iconRegistry.addSvgIcon('event', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/event.svg'));
        iconRegistry.addSvgIcon('track_changes', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/track_changes.svg'));
        iconRegistry.addSvgIcon('language', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/language.svg'));
        iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
        iconRegistry.addSvgIcon('book', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/book.svg'));
        iconRegistry.addSvgIcon('business', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/business.svg'));
        iconRegistry.addSvgIcon('place', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/place.svg'));
        iconRegistry.addSvgIcon('code', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/code.svg'));
        iconRegistry.addSvgIcon('help', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg'));
        iconRegistry.addSvgIcon('clear', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clear.svg'));
        iconRegistry.addSvgIcon('vpn', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vpn.svg'));
        iconRegistry.addSvgIcon('new', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/new.svg'));
        iconRegistry.addSvgIcon('cloud', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloud.svg'));
        iconRegistry.addSvgIcon('backspace', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/backspace.svg'));
        iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
        iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
        iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
        iconRegistry.addSvgIcon('cached', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cached.svg'));
        iconRegistry.addSvgIcon('create', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/create.svg'));
        iconRegistry.addSvgIcon('employee', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'));
        iconRegistry.addSvgIcon('employer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/group.svg'));
        iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
        iconRegistry.addSvgIcon('equalizer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/equalizer.svg'));
        iconRegistry.addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security.svg'));
        iconRegistry.addSvgIcon('radio_on', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_on.svg'));
        iconRegistry.addSvgIcon('radio_off', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_off.svg'));
        iconRegistry.addSvgIcon('salary', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salary.svg'));
        iconRegistry.addSvgIcon('drop_down', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/drop_down.svg'));
    }
    productCustomMaterialModule = __decorate([
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
                material_1.MatBadgeModule
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
                material_1.MatBadgeModule
            ]
        }),
        __metadata("design:paramtypes", [material_2.MatIconRegistry, platform_browser_1.DomSanitizer])
    ], productCustomMaterialModule);
    return productCustomMaterialModule;
}());
exports.productCustomMaterialModule = productCustomMaterialModule;
//# sourceMappingURL=elish.material.module.js.map