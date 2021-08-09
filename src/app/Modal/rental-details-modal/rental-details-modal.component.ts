import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxMaterialSpinnerService } from 'ngx-material-spinner';
import { RentOut } from 'src/app/Model/rentout';
import { RentOutService } from 'src/app/Service/rentoutService';

@Component({
  selector: 'app-rental-details-modal',
  templateUrl: './rental-details-modal.component.html',
  styleUrls: ['./rental-details-modal.component.scss']
})
export class RentalDetailsModalComponent implements OnInit {

  rental: RentOut = new RentOut();
  constructor( 
    private rentalService: RentOutService,
    private spinner: NgxMaterialSpinnerService,
    public dialogRef: MatDialogRef<RentalDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.rental= data.rentout;
    }

  ngOnInit(): void {
     this.getRentalInfo();
  }

  getRentalInfo() {
 
    this.spinner.show('primary');
    const includes = ['RentalDetails', 'RentalPayments']
    this.rentalService.get(String(this.rental.id), includes).subscribe((data: any) => {
      this.rental = data.result;
      this.rental.rentalDetails.forEach(element => {
        let itemCount = 0;
        element.rentalReturns.forEach(itemReturn => {
          itemCount += itemReturn.quantity;
        })
        if (element.quantity == itemCount) {
          element.fullyReturned = true;
        }
        element.qtyToBeReturned = element.quantity - itemCount;
      });
      this.spinner.hide('primary');
    }, (error) => {
      this.spinner.hide('primary');
      console.log(error);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
