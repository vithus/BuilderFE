import { Component, OnInit } from '@angular/core';
import { NgxMaterialSpinnerModule, NgxMaterialSpinnerService } from 'ngx-material-spinner';
import { Material } from 'src/app/Model/material';
import { MaterialService } from 'src/app/Service/materialService';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss']
})
export class AddMaterialComponent implements OnInit {

  constructor(private materialService : MaterialService,private spinner: NgxMaterialSpinnerService) { }

  material : Material = new Material();
  materials: Material[]=[];

  itemsPerPage = 12;
  currentPage = 1;
  totalItemCount = 0;

  ngOnInit(): void {
    this.getMaterials();
  }

  public save(){
    debugger;
    var validatedResult = this.material.isValid();
    if(!validatedResult.status){
      alert(validatedResult.message);
      return;
    }
    if(this.material.id){
      this.updateMaterial();
    } else{
      this.newMaterial();
    }
  }

  newMaterial() {
    this.spinner.show('primary');
    this.materialService.addMaterial(this.material).subscribe((data : any)=>{
      console.log(data);
      if(!data.isError) {
        alert("Material has been created Successfully");
        this.material = new Material();
        this.getMaterials();
        this.spinner.hide('primary');
      }
    },(error)=>{
       console.log(error);
       alert("Something went wrong. Please try again later");
       this.spinner.hide('primary');
    })
  }

  updateMaterial(){
    this.spinner.show('primary');
    this.materialService.updateMaterial(this.material).subscribe((data : any)=>{
      console.log(data);
      if(!data.isError) {
        alert("Material has been updated Successfully");
        this.material = new Material();
        this.getMaterials();
        this.spinner.hide('primary');
      }
    },(error)=>{
       console.log(error);
       alert("Something went wrong. Please try again later");
       this.spinner.hide('primary');
    })
  }

  cancel(){
    this.material = new Material();
  }

  pageChanged(event:any) {
    this.materials = [];
    this.currentPage = event;
    this.getMaterials();
  }

  changePerPageValue(page:any) {
    if (page != 0 && page !== null) {
      this.materials = [];
      this.currentPage = 1;
      this.getMaterials();
    }
  }

  getMaterials(){
    this.materialService.getAll(this.currentPage, this.itemsPerPage).subscribe((data:any)=>{
      if (!data.isError) {
        debugger;
        this.totalItemCount = data.result.count;
        this.materials = data.result.data;
      }
    },(error)=>{
      console.log(error);
    })
  }

  setForEdit(material:Material){
    material.isValid = this.material.isValid;
    this.material = material;
  }
}
