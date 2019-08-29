import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustommaterialModule } from './/custommaterial.module';
import { Setproductcomponent } from './admin/setproduct/set.component';
import { AdmintabComponent } from '../app/admin/admintab/admintab.component';
import { UserComponent } from '../app/user/user/user.component';
import { CartsComponent } from '../app/user/carts/carts.component';
import { OrdersComponent } from '../app/user/orders/orders.component';
import { AdminusersComponent } from '../app/admin/adminusers/adminusers.component';
import { AdmincartsComponent } from '../app/admin/admincarts/admincarts.component';
import { AdminordersComponent } from '../app/admin/adminorders/adminorders.component';
import { productComponent } from '../app/user/product/product.component';
import { LoginComponent } from '../app/user/login/login.component';
import { ProductSearchComponent } from './user/product-search/product-search.component';
import { MatDialogModule } from '@angular/material';
import { ModalModule } from 'angular-custom-modal';
import { AdjustWorkoutComponent } from './user/adjust-workout/adjust-workout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsPageComponent } from './shared/contact-us-page/contact-us-page.component';
import { LogOutPageComponent } from './shared/log-out-page/log-out-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    SettingsComponent,
    Setproductcomponent,
    AdmintabComponent,
    UserComponent,
    CartsComponent,
    OrdersComponent,
    AdminusersComponent,
    AdmincartsComponent,
    AdminordersComponent,
    productComponent,
    LoginComponent,
    ProductSearchComponent,
    AdjustWorkoutComponent,
    ContactUsPageComponent,
    LogOutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustommaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ModalModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  entryComponents: [AdjustWorkoutComponent, CartsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
