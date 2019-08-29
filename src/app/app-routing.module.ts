import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { productComponent } from './user/product/product.component';
import { LoginComponent } from './user/login/login.component';
import { ContactUsPageComponent } from './shared/contact-us-page/contact-us-page.component';
import { LogOutPageComponent } from './shared/log-out-page/log-out-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'admin', component: AdmintabComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'app-product', component: productComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactUs', component: ContactUsPageComponent },
  { path: 'logOut', component: LogOutPageComponent },

  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
