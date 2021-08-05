import { Component, OnInit } from '@angular/core';
import { KeyValueModel } from 'src/app/Model/keyValueModel';
import { Lessor } from 'src/app/Model/lessor';
import { RentIn } from 'src/app/Model/rentIn';
import { LessorService } from 'src/app/Service/lessorService';
import { RentInService } from 'src/app/Service/rentInService';

@Component({
  selector: 'app-rentin-materialreturn',
  templateUrl: './rentin-materialreturn.component.html',
  styleUrls: ['./rentin-materialreturn.component.scss']
})
export class RentinMaterialreturnComponent implements OnInit {

  selectedLessorId: string | null = null;
  selectedRentalId: string = '';

  lessors: Lessor[] = [];
  referenceNos: number[] = [];
  rentalDetails: KeyValueModel[] = [];

  rental: RentIn = new RentIn();

  labourCharge: number = 0;
  transportCharge: number = 0;
  returnedDate: string = '';


  constructor(private lessorService: LessorService,private rentinService: RentInService) { }

  ngOnInit(): void {
  }


  getLessor() {
    this.lessorService.getAll().subscribe((data:any)=>{
      if (!data.isError) {
        this.lessors = data.result.data;
      }
    },(error)=>{
      alert("Something went wrong");
      console.log(error);
    })
  }

  getReferences() {
    this.rentalDetails = [];
    const reference = new KeyValueModel  
    reference.key = null;
    reference.value = null;
    this.rentalDetails.push(reference);

    this.rentinService.getPendingRentalReferences(this.selectedLessorId).subscribe((data: any) => {
      if (!data.isError && data.result) {
        this.rentalDetails.push()
         data.result.forEach((dtl: KeyValueModel) => {
           this.rentalDetails.push(dtl);
         });
        console.log(this.rentalDetails);
      }
    },
      (error) => {
        console.log(error);
      })
  }
  returnMaterial() {

  }
  
  returnedDateChanged($event: any) {
    this.returnedDate = $event.value.toLocaleDateString();
  }

  getRentalInfo() {
    if(!this.selectedRentalId){
      alert("Please select a rental");
      return;
    }   

    const includes = ['RentalDetails', 'RentalPayments']
    this.rentinService.get(this.selectedRentalId, includes).subscribe((data: any) => {
      this.rental = data.result;
      this.rental.rentInDetails.forEach(element => {
        let itemCount = 0;
        element.rentInReturns.forEach(itemReturn => {
          itemCount += itemReturn.quantity;
        })
        if (element.quantity == itemCount) {
          element.fullyReturned = true;
        }
        element.qtyToBeReturned = element.quantity - itemCount;
      });
    }, (error) => {
      console.log(error);
    });
  }

}
