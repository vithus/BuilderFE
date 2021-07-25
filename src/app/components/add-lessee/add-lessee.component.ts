import { Component, OnInit } from '@angular/core';
import { Lessee } from 'src/app/Model/lessee';
import { LesseeService } from 'src/app/Service/lesseeService';

@Component({
  selector: 'app-add-lessee',
  templateUrl: './add-lessee.component.html',
  styleUrls: ['./add-lessee.component.scss']
})
export class AddLesseeComponent implements OnInit {

  constructor(private lesseeService : LesseeService) { }
  lessee: Lessee = new Lessee;

  ngOnInit(): void {
  }

  public save(){
    debugger;
    var validatedResult = this.lessee.isValid();
    if(!validatedResult.status){
      alert(validatedResult.message);
      return;
    }
    
    this.lesseeService.addLessee(this.lessee).subscribe((data : any)=>{
      console.log(data);
      if(!data.isError) {
        alert("Lessee has been created Successfully");
        this.lessee = new Lessee();
        
      }
    },(error)=>{
       console.log(error);
       alert("Something went wrong. Please try again later");
    })
  }

  cancel(){
    this.lessee = new Lessee();
  }
}
