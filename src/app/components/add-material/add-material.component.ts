import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/Model/material';
import { MaterialService } from 'src/app/Service/materialService';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss']
})
export class AddMaterialComponent implements OnInit {

  constructor(private materialService : MaterialService) { }

  material : Material = new Material();

  ngOnInit(): void {
  }

  public save(){
    debugger;
    var validatedResult = this.material.isValid();
    if(!validatedResult.status){
      alert(validatedResult.message);
      return;
    }
    
    this.materialService.addMaterial(this.material).subscribe((data : any)=>{
      console.log(data);
      if(!data.isError) {
        alert("Material has been created Successfully");
        this.material = new Material();
        
      }
    },(error)=>{
       console.log(error);
       alert("Something went wrong. Please try again later");
    })
  }

  cancel(){
    this.material = new Material();
  }
}
