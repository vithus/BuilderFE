import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LessorService } from 'src/app/Service/lessorService';
import { Lessor } from 'src/app/Model/lessor';
import { NgxMaterialSpinnerService } from 'ngx-material-spinner';

@Component({
  selector: 'app-add-lessor',
  templateUrl: './add-lessor.component.html',
  styleUrls: ['./add-lessor.component.scss']
})
export class AddLessorComponent implements OnInit {

  lessor: Lessor = new Lessor;
  lessors: Lessor[] = [];

  itemsPerPage = 12;
  currentPage = 1;
  totalItemCount = 0;

  constructor(private lessorService: LessorService, private spinner: NgxMaterialSpinnerService) { }

  ngOnInit(): void {
    this.getLessors();
  }

  public save() {
    debugger;
    var validatedResult = this.lessor.isValid();
    if (!validatedResult.status) {
      alert(validatedResult.message);
      return;
    }
    if(this.lessor.id){
      this.updateLessor();

    } else{
      this.newLessor();
    }
    
  }
  
  newLessor() {
    this.spinner.show('primary');
    this.lessorService.addLessor(this.lessor).subscribe((data: any) => {
      console.log(data);
      if (!data.isError) {
        alert("Lessor has been created Successfully");
        this.lessor = new Lessor();
        this.spinner.hide('primary');
        this.getLessors();
      }
    }, (error) => {
      console.log(error);
      alert("Something went wrong. Please try again later");
      this.spinner.hide('primary');
    })
  }

  updateLessor() {
    this.spinner.show('primary');
    this.lessorService.updateLessor(this.lessor).subscribe((data: any) => {
      console.log(data);
      if (!data.isError) {
        alert("Lessor has been updated Successfully");
        this.lessor = new Lessor();
        this.spinner.hide('primary');

      }
    }, (error) => {
      console.log(error);
      alert("Something went wrong. Please try again later");
      this.spinner.hide('primary');
    })
  }

  cancel() {
    this.lessor = new Lessor();
  }


  pageChanged(event: any) {
    this.lessors = [];
    this.currentPage = event;
    this.getLessors();
  }

  changePerPageValue(page: any) {
    if (page != 0 && page !== null) {
      this.lessors = [];
      this.currentPage = 1;
      this.getLessors();
    }
  }
  getLessors() {
    this.spinner.show('primary');
    this.lessorService.getAll(this.currentPage, this.itemsPerPage).subscribe((data: any) => {
      if (!data.isError) {
        debugger;
        this.totalItemCount = data.result.count;
        this.lessors = data.result.data;
      }
      this.spinner.hide('primary');
    },
      (error) => {
        this.spinner.hide('primary');
        alert("some thing went wrong")
      })
  }

  setForEdit(lessor: Lessor) {
    lessor.isValid = this.lessor.isValid;
    this.lessor = lessor;
  }
}
