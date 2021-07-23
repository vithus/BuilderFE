import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLessorComponent } from './components/add-lessor/add-lessor.component';
import { AddWorksiteComponent } from './components/add-worksite/add-worksite.component';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
import { AddRentoutComponent } from './components/add-rentout/add-rentout.component';
import { AddMaterialreturnComponent } from './components/add-materialreturn/add-materialreturn.component';
import { AddMaterialtranferComponent } from './components/add-materialtranfer/add-materialtranfer.component';
import { AddMaterialconsumableComponent } from './components/add-materialconsumable/add-materialconsumable.component';
import { AddMaterialpurchaseComponent } from './components/add-materialpurchase/add-materialpurchase.component';
import { PaymentcertificateComponent } from './components/paymentcertificate/paymentcertificate.component';
import { PaymentreviewComponent } from './components/paymentreview/paymentreview.component';
import { AddInitialstockComponent } from './components/add-initialstock/add-initialstock.component';
import { AddReviewstockComponent } from './components/add-reviewstock/add-reviewstock.component';
import { LesseeprofileComponent } from './components/lesseeprofile/lesseeprofile.component';
import { LesseeOutstandingComponent } from './components/lessee-outstanding/lessee-outstanding.component';
import { StockAtStoreComponent } from './components/stock-at-store/stock-at-store.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddLessorComponent,
    AddWorksiteComponent,
    AddSupplierComponent,
    AddRentoutComponent,
    AddMaterialreturnComponent,
    AddMaterialtranferComponent,
    AddMaterialconsumableComponent,
    AddMaterialpurchaseComponent,
    PaymentcertificateComponent,
    PaymentreviewComponent,
    AddInitialstockComponent,
    AddReviewstockComponent,
    LesseeprofileComponent,
    LesseeOutstandingComponent,
    StockAtStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
