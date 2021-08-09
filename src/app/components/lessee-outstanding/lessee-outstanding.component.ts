import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxMaterialSpinnerService } from 'ngx-material-spinner';
import { RentalDetailsModalComponent } from 'src/app/Modal/rental-details-modal/rental-details-modal.component';
import { Lessee } from 'src/app/Model/lessee';
import { RentOut } from 'src/app/Model/rentout';
import { LesseeService } from 'src/app/Service/lesseeService';
import { RentOutService } from 'src/app/Service/rentoutService';

@Component({
  selector: 'app-lessee-outstanding',
  templateUrl: './lessee-outstanding.component.html',
  styleUrls: ['./lessee-outstanding.component.scss']
})
export class LesseeOutstandingComponent implements OnInit {

  lessees: Lessee[] = [];
  rentOuts : RentOut[]=[];
  selectedLesseeId ='';
  constructor(private lesseeService : LesseeService, private rentoutService: RentOutService,
    private spinner: NgxMaterialSpinnerService,
    public dialog: MatDialog

    ) { }

  ngOnInit(): void {
    this.getLessee();
  }

  getLessee() {
    this.spinner.show('primary');
    this.lesseeService.getAll().subscribe((data: any) => {
      if (!data.isError) {
        this.lessees = data.result.data;
      }
      this.spinner.hide('primary');
    },
      (error) => {
        console.log(error);
        this.spinner.hide('primary');
      })
  }
  viewOutstandingRentals() {
    this.spinner.show('primary');
     this.rentoutService.getOverDue(this.selectedLesseeId).subscribe((data :any)=>{
         if(!data.isError){
           this.rentOuts = data.result;
         }
         this.spinner.hide('primary');
     }, (error)=>{
       console.log(error);
       this.spinner.hide('primary');
     })
  }

  viewDetail(rentout : RentOut) {
      
    if(rentout){
      const dialogRef = this.dialog.open(RentalDetailsModalComponent, {
        width: '100%',
        data: {rentout: rentout}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      }); 
    }
  }

}