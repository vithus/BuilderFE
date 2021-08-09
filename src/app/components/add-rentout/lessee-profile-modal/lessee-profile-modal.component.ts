import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lessee } from 'src/app/Model/lessee';
import { LesseePaymentInfo } from 'src/app/Model/lesseePaymentInfo';
import { LesseeRentalDetail } from 'src/app/Model/lesseeRentalDetails';
import { LesseeService } from 'src/app/Service/lesseeService';
import { RentOutService } from 'src/app/Service/rentoutService';

@Component({
  selector: 'app-lessee-profile-modal',
  templateUrl: './lessee-profile-modal.component.html',
  styleUrls: ['./lessee-profile-modal.component.scss']
})
export class LesseeProfileModalComponent implements OnInit {

  lesseeRentalDetails: LesseeRentalDetail[] = [];
  lesseeOverDueRentalDetails: LesseeRentalDetail[] = [];
  lesseePaymentInfo: LesseePaymentInfo = new LesseePaymentInfo();
  selectedLesseeId='';
  selectedLessee: Lessee |null=null;

  constructor(private rentalService: RentOutService, private lesseeService: LesseeService,
    public dialogRef: MatDialogRef<LesseeProfileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      if(data){
        this.selectedLesseeId = data.lessee.id;
        this.selectedLessee = data.lessee;
      }
    }

  ngOnInit(): void {
      this.getLesseeRentalDetails();
      this.getLesseeOverDueRentalDetails();
      this.getLesseePayment();
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


  viewInfo() {
    this.getLesseeRentalDetails();
    this.getLesseeOverDueRentalDetails();
    this.getLesseePayment();

  }

  close(){
    this.dialogRef.close();
  }
}
