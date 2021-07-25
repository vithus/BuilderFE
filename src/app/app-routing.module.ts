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

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-lessee', component: AddLesseeComponent},
  {path: 'add-lessor', component: AddLessorComponent},
  {path: 'add-worksite', component: AddWorksiteComponent},
  {path: 'add-supplier', component: AddSupplierComponent},
  {path: 'add-rentout', component: AddRentoutComponent},
  {path:'add-rentin',component: AddRentinComponent},
  {path: 'add-materialreturn', component: AddMaterialreturnComponent},
  {path: 'add-materialtranfer', component: AddMaterialtranferComponent},
  {path: 'add-materialpurchase', component: AddMaterialpurchaseComponent},
  {path: 'add-materialconsumable', component: AddMaterialconsumableComponent},
  {path: 'paymentcertificate', component: PaymentcertificateComponent},
  {path: 'paymentreview', component: PaymentreviewComponent},
  {path: 'add-initialstock', component: AddInitialstockComponent},
  {path: 'add-material', component: AddMaterialComponent},

  {path: 'add-reviewstock', component: AddReviewstockComponent},
  {path: 'lesseeprofile', component: LesseeprofileComponent},
  {path: 'lessee-outstanding', component: LesseeOutstandingComponent},
  {path: 'stock-at-store', component: StockAtStoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [TopBarComponent, NavBarComponent, DashboardComponent, AddLesseeComponent];
