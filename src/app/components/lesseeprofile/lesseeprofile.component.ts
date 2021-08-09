import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Lessee } from 'src/app/Model/lessee';
import { LesseePaymentInfo } from 'src/app/Model/lesseePaymentInfo';
import { LesseeRentalDetail } from 'src/app/Model/lesseeRentalDetails';
import { LesseeService } from 'src/app/Service/lesseeService';
import { RentOutService } from 'src/app/Service/rentoutService';

@Component({
  selector: 'app-lesseeprofile',
  templateUrl: './lesseeprofile.component.html',
  styleUrls: ['./lesseeprofile.component.scss']
})
export class LesseeprofileComponent implements OnInit {

  lesseeRentalDetails: LesseeRentalDetail[] = [];
  lesseeOverDueRentalDetails: LesseeRentalDetail[] = [];
  lesseePaymentInfo: LesseePaymentInfo = new LesseePaymentInfo();
  lessees: Lessee[] = [];
  isPopUp = false;
  selectedLesseeId: string = '';

  constructor(private rentalService: RentOutService, private lesseeService: LesseeService,
    ) { 
      
      
    }

  ngOnInit(): void {
    this.getLessee();
    if (this.selectedLesseeId) {
      this.getLesseeRentalDetails();
      this.getLesseeOverDueRentalDetails();
      this.getLesseePayment();
    }
  }

  getLesseeRentalDetails() {
    this.rentalService.getLesseeRentalDetails(this.selectedLesseeId).subscribe((data: any) => {
      if (!data.isError && data.result) {
        this.lesseeRentalDetails = data.result;
      }
    },
      (error) => {
        console.log(error);
      })
  }

  getLesseeOverDueRentalDetails() {
    this.rentalService.getLesseeOverDueRentalDetails(this.selectedLesseeId).subscribe((data: any) => {
      if (!data.isError && data.result) {
        this.lesseeOverDueRentalDetails = data.result;
      }
    },
      (error) => {
        console.log(error);
      })
  }

  getLesseePayment() {
    this.rentalService.getLesseePaymentInfo(this.selectedLesseeId).subscribe((data: any) => {
      if (!data.isError && data.result) {
        this.lesseePaymentInfo = data.result;
      }
    },
      (error) => {
        console.log(error);
      })
  }


  getLessee() {
    this.lesseeService.getAll().subscribe((data: any) => {
      if (!data.isError) {
        this.lessees = data.result.data;
      }
    },
      (error) => {
        console.log(error);
      })
  }

  viewInfo() {
    this.getLesseeRentalDetails();
    this.getLesseeOverDueRentalDetails();
    this.getLesseePayment();

  }
}
