import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { NgxMaterialSpinnerService } from 'ngx-material-spinner';
import { KeyValueModel } from 'src/app/Model/keyValueModel';
import { Lessee } from 'src/app/Model/lessee';
import { RentalReturn } from 'src/app/Model/rentalReturn';
import { RentalDetail, RentOut } from 'src/app/Model/rentout';
import { LesseeService } from 'src/app/Service/lesseeService';
import { LessorService } from 'src/app/Service/lessorService';
import { RentOutService } from 'src/app/Service/rentoutService';

@Component({
  selector: 'app-add-materialreturn',
  templateUrl: './add-materialreturn.component.html',
  styleUrls: ['./add-materialreturn.component.scss']
})
export class AddMaterialreturnComponent implements OnInit {

  constructor(private lesseeService: LesseeService, private rentalService: RentOutService,private spinner: NgxMaterialSpinnerService
    ) { }

  selectedLesseId: string | null = null;
  selectedRentalId: string = '';

  lessees: Lessee[] = [];
  referenceNos: number[] = [];
  rentalDetails: KeyValueModel[] = [];

  rental: RentOut = new RentOut();

  labourCharge: number = 0;
  transportCharge: number = 0;

  returnedDate: string = '';
  ngOnInit(): void {
    this.getLessee();
    this.getReferences();
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

  getReferences() {
    this.rentalDetails = [];
    const reference = new KeyValueModel  
    reference.key = null;
    reference.value = null;
    this.rentalDetails.push(reference);
    this.spinner.show('primary');
    this.rentalService.getPendingRentalReferences(this.selectedLesseId).subscribe((data: any) => {
      if (!data.isError && data.result) {
        this.rentalDetails.push()
         data.result.forEach((dtl: KeyValueModel) => {
           this.rentalDetails.push(dtl);
         });
         this.spinner.hide('primary');
      }
    },
      (error) => {
        this.spinner.hide('primary');
        alert('Something went wrong');
      })
  }

  getRentalInfo() {
    if(!this.selectedRentalId){
      alert("Please select a rental");
      return;
    }   

    this.spinner.show('primary');
    const includes = ['RentalDetails', 'RentalPayments']
    this.rentalService.get(this.selectedRentalId, includes).subscribe((data: any) => {
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

  returnMaterial() {
    const isValid =this.validateReturn();
    if(isValid) {
      this.spinner.show('primary');
      var body = this.GenerateReturnBody();
      this.rentalService.returnMaterial(body,this.rental.id).subscribe((data:any)=>{
         console.log(data);
         if(!data.isError) {
           alert("The material return has been added successfully");
           this.rental = new RentOut();
           this.spinner.hide('primary');
         }
      },(error)=>{
        this.spinner.hide('primary');
        console.log(error);
      })
    }
  }

  validateReturn() {
    var materialReturn = this.rental.rentalDetails.filter(p => p.isSelected && p.qtyBeingReturned > 0);
    if (!materialReturn || materialReturn.length == 0) {
      alert("Please select the material to be returned");
      return false;
    }
    var materialReturn = this.rental.rentalDetails.filter(p => p.qtyToBeReturned < p.qtyBeingReturned);
    if (materialReturn && materialReturn.length > 0) {
      alert(`The quantity to be returned is ${materialReturn[0].qtyToBeReturned} for the material ${materialReturn[0].material?.name}`)
      return false;
    } else {
      return true;
    }
  }

  GenerateReturnBody() {
    var materialReturn = this.rental.rentalDetails.filter(p => p.isSelected && p.qtyBeingReturned > 0);
    const rentalReturns: RentalReturn[] = [];
    materialReturn.forEach(data => {
      const rentalReturn = new RentalReturn();
      rentalReturn.quantity = data.qtyBeingReturned;
      rentalReturn.rentailDetailId = data.id;
      rentalReturn.returnedDateString = this.returnedDate;
      rentalReturns.push(rentalReturn);
    });
    rentalReturns[0].labourCharge = this.labourCharge;
    rentalReturns[0].transportCharge = this.transportCharge;
    return rentalReturns;
  }
  returnedDateChanged($event: any) {
    this.returnedDate = $event.value.toLocaleDateString();
  }

}
