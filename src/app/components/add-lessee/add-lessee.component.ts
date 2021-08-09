import { Component, OnInit } from '@angular/core';
import { NgxMaterialSpinnerService } from 'ngx-material-spinner';
import { Lessee } from 'src/app/Model/lessee';
import { LesseeService } from 'src/app/Service/lesseeService';

@Component({
  selector: 'app-add-lessee',
  templateUrl: './add-lessee.component.html',
  styleUrls: ['./add-lessee.component.scss']
})
export class AddLesseeComponent implements OnInit {

  lessee: Lessee = new Lessee;
  lessees: Lessee[] =[];

  itemsPerPage = 12;
  currentPage = 1;
  totalItemCount = 0;

  constructor(private lesseeService : LesseeService,private spinner: NgxMaterialSpinnerService
    ) { }


  ngOnInit(): void {
    this.getLessees();
  }

  public save(){
    var validatedResult = this.lessee.isValid();
    if(!validatedResult.status){
      alert(validatedResult.message);
      return;
    }
    if(this.lessee.id){
      this.updateLessee();

    } else{
      this.newLessee();
    }
  }

  newLessee(){
    this.spinner.show('primary');
    this.lesseeService.addLessee(this.lessee).subscribe((data : any)=>{
      console.log(data);
      if(!data.isError) {
        alert("Lessee has been created Successfully");
        this.lessee = new Lessee();
        this.spinner.hide('primary');
        this.getLessees();
      }
    },(error)=>{
       console.log(error);
       alert("Something went wrong. Please try again later");
       this.spinner.hide('primary');
    })
  }

  updateLessee(){
    this.spinner.show('primary');
    this.lesseeService.updateLessee(this.lessee).subscribe((data : any)=>{
      console.log(data);
      if(!data.isError) {
        alert("Lessee has been updated Successfully");
        this.lessee = new Lessee();
        this.spinner.hide('primary');

      }
    },(error)=>{
       console.log(error);
       alert("Something went wrong. Please try again later");
       this.spinner.hide('primary');
    })
  }

  cancel(){
    alert("cancelled");
    this.lessee = new Lessee();
  }

  
  pageChanged(event:any) {
    this.lessees = [];
    this.currentPage = event;
    this.getLessees();
  }

  changePerPageValue(page:any) {
    if (page != 0 && page !== null) {
      this.lessees = [];
      this.currentPage = 1;
      this.getLessees();
    }
  }
  getLessees() {
    this.spinner.show('primary');
    this.lesseeService.getAll(this.currentPage,this.itemsPerPage).subscribe((data:any)=>{
      if (!data.isError) {
        debugger;
        this.totalItemCount = data.result.count;
        this.lessees = data.result.data;
      }
      this.spinner.hide('primary');
    },
    (error)=>{
      this.spinner.hide('primary');
      alert("some thing went wrong")
    })
  }

  setForEdit(lessee:Lessee){
    lessee.isValid = this.lessee.isValid;
    this.lessee = lessee;
  }
}
