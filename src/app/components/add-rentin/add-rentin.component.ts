import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/Model/material';
import { RentIn, RentinDetail } from 'src/app/Model/rentIn';
import { LessorService } from 'src/app/Service/lessorService';
import { MaterialService } from 'src/app/Service/materialService';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { RentInService } from 'src/app/Service/rentInService';
import { NgxMaterialSpinnerService } from 'ngx-material-spinner';

@Component({
  selector: 'app-add-rentin',
  templateUrl: './add-rentin.component.html',
  styleUrls: ['./add-rentin.component.scss']
})
export class AddRentinComponent implements OnInit {

  constructor(
    private materialService: MaterialService,
    private lessorService: LessorService,
    private rentInService: RentInService,
    private spinner: NgxMaterialSpinnerService

    ) { }

  lessors: any[] =[];
  lessorId: any = null;
  materials: Material[] =[];
  
  rentIn:RentIn = new RentIn();
  
  material='';
  selectedMaterial: Material|undefined = undefined;
  quantity:number= 0;
  remark:string = '';
  rentalPerUnit:number=0;

  ngOnInit(): void {
    this.getLessors();
    this.getMaterials();
  }

  getLessors(){
     this.lessorService.getAll().subscribe((data:any)=>{
       if(!data.isError){
          this.lessors = data.result.data;
       }
     },(error)=>{
       console.log(error)
     })
  }
  getMaterials(){
    this.materialService.getAll().subscribe((data:any)=>{
      if(!data.isError){
         this.materials = data.result.data;
      }
    },(error)=>{
      console.log(error)
    })
 }

 addItem(){
   debugger;

   if(this.selectedMaterial===undefined || this.selectedMaterial === null ||this.quantity<=0 || this.rentalPerUnit <=0){
     return;
   }
   const rentailDetail = new RentinDetail();
   rentailDetail.materialId = this.selectedMaterial.id;
   rentailDetail.materialName = this.selectedMaterial.name;
   rentailDetail.quantity = this.quantity;
   rentailDetail.remark = this.remark;
   rentailDetail.unit = this.selectedMaterial.unit;
   rentailDetail.rentalPerUnit = this.rentalPerUnit;
   this.rentIn.rentInDetails.push(rentailDetail);
 }
 removeItem(item:RentinDetail){
   var index = this.rentIn.rentInDetails.indexOf(item)
   this.rentIn.rentInDetails.splice(index);
 }

 materialChanged() {
   this.selectedMaterial  = this.materials.find(p=>p.id == this.material);
   if(this.selectedMaterial!==undefined && this.selectedMaterial!==null){
     this.rentalPerUnit = this.selectedMaterial.rentalPrice;
   }

 }
 save() {
   
    var validationStatus = this.rentIn.isValid();
    if(!validationStatus.status){
      alert(validationStatus.message);
      return;
    }
    this.spinner.show('primary');
    this.rentInService.addRentIn(this.rentIn).subscribe((data:any)=>{
      if(!data.result.isError){
         alert("Rentin details has been addedd successfully");
         this.rentIn = new RentIn();
         this.material = '';
         this.selectedMaterial = undefined;
         this.rentalPerUnit = 0;
         this.remark = '';
         this.quantity = 0;      
         
      }
      this.spinner.hide('primary');
    },(error)=>{
      this.spinner.hide('primary');
      alert("Something went wrong");
    })
} 


calculateTotal(noOfDays=1) {
  this.rentIn.totalAmount = Number(this.rentIn.labourCharge) + Number(this.rentIn.transportCharge);
  let itemAmount = 0;
  this.rentIn.rentInDetails.forEach(element => {
    itemAmount += Number(element.quantity) * Number(element.rentalPerUnit);
  });
  this.rentIn.totalAmount += (itemAmount * noOfDays);
}


dateChanged($event:any) {
  this.rentIn.dateString =$event.value.toLocaleDateString();
  if(this.rentIn.dueDateString){
    var date1 = new Date(this.rentIn.dateString);
    var date2 = new Date(this.rentIn.dueDateString);
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    this.calculateTotal(Difference_In_Days);
  }
}

dueDateChanged($event:any) {
  this.rentIn.dueDateString = $event.value.toLocaleDateString();
  if(this.rentIn.dateString){
    var date1 = new Date(this.rentIn.dateString);
    var date2 = new Date(this.rentIn.dueDateString);
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    this.calculateTotal(Difference_In_Days);
  }
}

}
