import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { PropertyFormComponent } from './property-form/property-form.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'seller/dashboard', component: SellerDashboardComponent },
  { path: 'seller/property/add', component: PropertyFormComponent },
  { path: 'seller/property/update/:id', component: PropertyFormComponent },
  { path: 'buyer/dashboard', component: BuyerDashboardComponent },
  { path: 'property/:id', component: PropertyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }