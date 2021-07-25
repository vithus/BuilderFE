import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/Model/inventory';
import { Material } from 'src/app/Model/material';
import { InventoryService } from 'src/app/Service/inventoryService';
import { MaterialService } from 'src/app/Service/materialService';

@Component({
  selector: 'app-add-initialstock',
  templateUrl: './add-initialstock.component.html',
  styleUrls: ['./add-initialstock.component.scss']
})
export class AddInitialstockComponent implements OnInit {

  materials:any[] = [];
  materialId : any = null;
  inventory : Inventory = new Inventory();
  constructor(private materialService: MaterialService, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getMaterials();
  }

  getMaterials() {
    this.materialService.getAll().subscribe((data:any)=>{
      if(!data.isError){
         this.materials = data.result.data;
      }
    })
  }

  public save(){
    debugger;
    this.inventory.materialId = this.materialId;
    var validatedResult = this.inventory.isValid();
    if(!validatedResult.status){
      alert(validatedResult.message);
      return;
    }
    
    this.inventoryService.addInventory(this.inventory).subscribe((data : any)=>{
      console.log(data);
      if(!data.isError) {
        alert("Material has been created Successfully");
        this.inventory = new Inventory();
        
      }
    },(error)=>{
       console.log(error);
       alert("Something went wrong. Please try again later");
    })
  }

  cancel(){
    this.inventory = new Inventory();
  }

}
