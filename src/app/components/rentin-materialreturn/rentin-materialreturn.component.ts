import { Component, OnInit } from '@angular/core';
import { NgxMaterialSpinnerService } from 'ngx-material-spinner';
import { KeyValueModel } from 'src/app/Model/keyValueModel';
import { Lessor } from 'src/app/Model/lessor';
import { RentIn } from 'src/app/Model/rentIn';
import { RentInReturn } from 'src/app/Model/rentInReturn';
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


  constructor(private lessorService: LessorService,private rentinService: RentInService,private spinner: NgxMaterialSpinnerService
    ) { }

  ngOnInit(): void {
    this.getLessor();
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
  
  returnedDateChanged($event: any) {
    this.returnedDate = $event.value.toLocaleDateString();
  }

  getRentalInfo() {
    if(!this.selectedRentalId){
      alert("Please select a rental");
      return;
    }   
    this.spinner.show('primary');
    const includes = ['RentInDetails', 'RentInPayments']
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
        this.spinner.hide('primary');
      });
    }, (error) => {
      this.spinner.hide('primary');
      console.log(error);
    });
  }

  returnMaterial() {
    const isValid =this.validateReturn();
    if(isValid) {
      this.spinner.show('primary');
      var body = this.GenerateReturnBody();
      this.rentinService.returnMaterial(body,this.rental.id).subscribe((data:any)=>{
         console.log(data);
         if(!data.isError) {
           alert("The material return has been added successfully");
           this.rental = new RentIn();
           this.spinner.hide('primary');
         }
      },(error)=>{
        this.spinner.hide('primary');
        console.log(error);
      })
    }
  }

  validateReturn() {
    var materialReturn = this.rental.rentInDetails.filter(p => p.isSelected && p.qtyBeingReturned > 0);
    if (!materialReturn || materialReturn.length == 0) {
      alert("Please select the material to be returned");
      return false;
    }
    var materialReturn = this.rental.rentInDetails.filter(p => p.qtyToBeReturned < p.qtyBeingReturned);
    if (materialReturn && materialReturn.length > 0) {
      alert(`The quantity to be returned is ${materialReturn[0].qtyToBeReturned} for the material ${materialReturn[0].material?.name}`)
      return false;
    } else {
      return true;
    }
  }

  GenerateReturnBody() {
    var materialReturn = this.rental.rentInDetails.filter(p => p.isSelected && p.qtyBeingReturned > 0);
    const rentalReturns: RentInReturn[] = [];
    materialReturn.forEach(data => {
      const rentalReturn = new RentInReturn();
      rentalReturn.quantity = data.qtyBeingReturned;
      rentalReturn.RentInDetailId = data.id;
      rentalReturn.returnedDateString = this.returnedDate;
      rentalReturns.push(rentalReturn);
    });
    rentalReturns[0].labourCharge = this.labourCharge;
    rentalReturns[0].transportCharge = this.transportCharge;
    return rentalReturns;
  }

}
