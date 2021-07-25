import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/Model/material';
import { RentalDetail, RentIn } from 'src/app/Model/rentIn';
import { LessorService } from 'src/app/Service/lessorService';
import { MaterialService } from 'src/app/Service/materialService';

@Component({
  selector: 'app-add-rentin',
  templateUrl: './add-rentin.component.html',
  styleUrls: ['./add-rentin.component.scss']
})
export class AddRentinComponent implements OnInit {

  constructor(
    private materialService: MaterialService,
    private lessorService: LessorService
    ) { }

  lessors: any[] =[];
  lessorId: any = null;
  materials: Material[] =[];
  
  rentIn:RentIn = new RentIn();
  
  material='';
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
   var selectedMaterial = this.materials.find(p=>p.id == this.material);

   if(selectedMaterial===undefined){
     return;
   }
   const rentailDetail = new RentalDetail();
   rentailDetail.materialId = selectedMaterial.id;
   rentailDetail.materialName = selectedMaterial.name;
   rentailDetail.quantity = this.quantity;
   rentailDetail.remark = this.remark;
   rentailDetail.unit = selectedMaterial.unit;
   rentailDetail.rentalPerUnit = this.rentalPerUnit;
   this.rentIn.rentInDetails.push(rentailDetail);
 }
 removeItem(item:RentalDetail){
   var index = this.rentIn.rentInDetails.indexOf(item)
   this.rentIn.rentInDetails.splice(index,1);
 }
}
