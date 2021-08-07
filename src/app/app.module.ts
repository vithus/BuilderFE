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
import { FormsModule } from '@angular/forms';
import { LessorService } from './Service/lessorService';
import { HttpClientModule } from '@angular/common/http';
import { LesseeService } from './Service/lesseeService';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { MaterialService } from './Service/materialService';
import { InventoryService } from './Service/inventoryService';
import { AddRentinComponent } from './components/add-rentin/add-rentin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RentInService } from './Service/rentInService';
import { RentOutService } from './Service/rentoutService';
import { NgxPaginationModule } from 'ngx-pagination';
import { RentalPaymentComponent } from './components/add-materialreturn/rental-payment/rental-payment.component';
import { RentinMaterialreturnComponent } from './components/rentin-materialreturn/rentin-materialreturn.component';
import { LoginComponent } from './components/login/login.component';

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
    StockAtStoreComponent,
    AddMaterialComponent,
    AddRentinComponent,
    RentalPaymentComponent,
    RentinMaterialreturnComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule ,
    NgxPaginationModule
  
  ],
  providers: [
    LessorService,
    LesseeService,
    MaterialService,
    InventoryService,
    RentInService,
    RentOutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
