import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopBarComponent } from './components/layouts/top-bar/top-bar.component';
import { NavBarComponent } from './components/layouts/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddLesseeComponent } from './components/add-lessee/add-lessee.component';
import { AddLessorComponent } from './components/add-lessor/add-lessor.component';
import { AddWorksiteComponent } from './components/add-worksite/add-worksite.component';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
import { AddRentoutComponent } from './components/add-rentout/add-rentout.component';
import { AddMaterialreturnComponent } from './components/add-materialreturn/add-materialreturn.component';
import { AddMaterialtranferComponent } from './components/add-materialtranfer/add-materialtranfer.component';
import { AddMaterialpurchaseComponent } from './components/add-materialpurchase/add-materialpurchase.component';
import { AddMaterialconsumableComponent } from './components/add-materialconsumable/add-materialconsumable.component';
import { PaymentcertificateComponent } from './components/paymentcertificate/paymentcertificate.component';
import { PaymentreviewComponent } from './components/paymentreview/paymentreview.component';
import { AddInitialstockComponent } from './components/add-initialstock/add-initialstock.component';
import { AddReviewstockComponent } from './components/add-reviewstock/add-reviewstock.component';
import { LesseeprofileComponent } from './components/lesseeprofile/lesseeprofile.component';
import { LesseeOutstandingComponent } from './components/lessee-outstanding/lessee-outstanding.component';
import { StockAtStoreComponent } from './components/stock-at-store/stock-at-store.component';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { AddRentinComponent } from './components/add-rentin/add-rentin.component';
import { RentinMaterialreturnComponent } from './components/rentin-materialreturn/rentin-materialreturn.component';
import { LoginComponent } from './components/login/login.component';
import { CanActiveService } from './Service/Auth/can-active.service';
import { DeActiveService } from './Service/Auth/de-active.service';

const routes: Routes = [
  //{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  //{path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: '', component: DashboardComponent, canActivate:[CanActiveService]},
  {path: 'login', component: LoginComponent, canActivate:[DeActiveService]},  
  {path: 'add-lessee', component: AddLesseeComponent, canActivate:[CanActiveService]},
  {path: 'add-lessor', component: AddLessorComponent, canActivate:[CanActiveService]},
  {path: 'add-worksite', component: AddWorksiteComponent, canActivate:[CanActiveService]},
  {path: 'add-supplier', component: AddSupplierComponent, canActivate:[CanActiveService]},
  {path: 'add-rentout', component: AddRentoutComponent, canActivate:[CanActiveService]},
  {path:'add-rentin',component: AddRentinComponent, canActivate:[CanActiveService]},
  {path: 'add-materialreturn', component: AddMaterialreturnComponent, canActivate:[CanActiveService]},
  {path: 'add-materialtranfer', component: AddMaterialtranferComponent, canActivate:[CanActiveService]},
  {path: 'add-materialpurchase', component: AddMaterialpurchaseComponent, canActivate:[CanActiveService]},
  {path: 'add-materialconsumable', component: AddMaterialconsumableComponent, canActivate:[CanActiveService]},
  {path: 'paymentcertificate', component: PaymentcertificateComponent, canActivate:[CanActiveService]},
  {path: 'paymentreview', component: PaymentreviewComponent, canActivate:[CanActiveService]},
  {path: 'add-initialstock', component: AddInitialstockComponent, canActivate:[CanActiveService]},
  {path: 'add-material', component: AddMaterialComponent, canActivate:[CanActiveService]},

  {path: 'add-reviewstock', component: AddReviewstockComponent, canActivate:[CanActiveService]},
  {path: 'lesseeprofile', component: LesseeprofileComponent, canActivate:[CanActiveService]},
  {path: 'lessee-outstanding', component: LesseeOutstandingComponent, canActivate:[CanActiveService]},
  {path: 'stock-at-store', component: StockAtStoreComponent, canActivate:[CanActiveService]},
  {path: 'rentin-materialreturn', component: RentinMaterialreturnComponent, canActivate:[CanActiveService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [TopBarComponent, NavBarComponent, DashboardComponent, AddLesseeComponent];
