"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var settings_component_1 = require("./settings/settings.component");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var header_component_1 = require("./shared/header/header.component");
var footer_component_1 = require("./shared/footer/footer.component");
var aboutus_component_1 = require("./shared/aboutus/aboutus.component");
var app_routing_module_1 = require(".//app-routing.module");
var custommaterial_module_1 = require(".//custommaterial.module");
var set_component_1 = require("./admin/setproduct/set.component");
var admintab_component_1 = require("../app/admin/admintab/admintab.component");
var user_component_1 = require("../app/user/user/user.component");
var carts_component_1 = require("../app/user/carts/carts.component");
var orders_component_1 = require("../app/user/orders/orders.component");
var adminusers_component_1 = require("../app/admin/adminusers/adminusers.component");
var admincarts_component_1 = require("../app/admin/admincarts/admincarts.component");
var adminorders_component_1 = require("../app/admin/adminorders/adminorders.component");
var product_component_1 = require("../app/user/product/product.component");
var login_component_1 = require("../app/user/login/login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                aboutus_component_1.AboutusComponent,
                settings_component_1.SettingsComponent,
                set_component_1.Setproductcomponent,
                admintab_component_1.AdmintabComponent,
                user_component_1.UserComponent,
                carts_component_1.CartsComponent,
                orders_component_1.OrdersComponent,
                adminusers_component_1.AdminusersComponent,
                admincarts_component_1.AdmincartsComponent,
                adminorders_component_1.AdminordersComponent,
                product_component_1.productComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                custommaterial_module_1.CustommaterialModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map