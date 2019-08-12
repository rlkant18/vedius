"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aboutus_component_1 = require("./shared/aboutus/aboutus.component");
var settings_component_1 = require("./settings/settings.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var admintab_component_1 = require("./admin/admintab/admintab.component");
var product_component_1 = require("./user/product/product.component");
var login_component_1 = require("./user/login/login.component");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'aboutus', component: aboutus_component_1.AboutusComponent },
    { path: 'admin', component: admintab_component_1.AdmintabComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent },
    { path: 'app-product', component: product_component_1.productComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map