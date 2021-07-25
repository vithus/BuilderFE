import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LessorService } from 'src/app/Service/lessorService';
import { Lessor } from 'src/app/Model/lessor';

@Component({
  selector: 'app-add-lessor',
  templateUrl: './add-lessor.component.html',
  styleUrls: ['./add-lessor.component.scss']
})
export class AddLessorComponent implements OnInit {

   lessor: Lessor = new Lessor;
  constructor(private lessorService : LessorService) { }

  ngOnInit(): void {

  }

  public save(){
    debugger;
    var validatedResult = this.lessor.isValid();
    if(!validatedResult.status){
      alert(validatedResult.message);
      return;
    }
    
    this.lessorService.addLessor(this.lessor).subscribe((data : any)=>{
      console.log(data);
      if(!data.isError) {
        alert("Lessor has been created Successfully");
        this.lessor = new Lessor();
        
      }
    },(error)=>{
       console.log(error);
       alert("Something went wrong. Please try again later");
    })
  }

  cancel(){
    this.lessor = new Lessor();
  }
}
