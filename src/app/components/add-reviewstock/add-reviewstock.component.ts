import { Component, OnInit } from '@angular/core';
import { Lessor } from 'src/app/Model/lessor';
import { Material } from 'src/app/Model/material';
import { LessorService } from 'src/app/Service/lessorService';
import { MaterialService } from 'src/app/Service/materialService';

@Component({
  selector: 'app-add-reviewstock',
  templateUrl: './add-reviewstock.component.html',
  styleUrls: ['./add-reviewstock.component.scss']
})
export class AddReviewstockComponent implements OnInit {

  constructor(private lessorService : LessorService,
    private materialService: MaterialService) { }

  lessors:Lessor[] =[];
  selectedLessor : Lessor|undefined = undefined;
  materials : Material[]=[];
  selectedLessorId :string |null= null;

  itemsPerPage = 12;
  currentPage = 1;
  totalItemCount = 0;

  ngOnInit(): void {
    this.getLessor();
  }

  getLessor() {
    const own = new Lessor();
    own.id = null;
    own.fullName = "Own";
    this.lessors.push(own);
    this.lessorService.getAll().subscribe((data: any) => {
      if (!data.isError) {
        data.result.data.forEach((e: Lessor) => {
          this.lessors.push(e);
        });
        ;
      }
    },
      (error) => {
        console.log(error);
      })
  }
  getStock() {
    this.selectedLessorId = this.selectedLessor ? this.selectedLessor.id : null;
    this.materialService.getPaginatedLessorMaterial(this.selectedLessorId,this.currentPage,this.itemsPerPage).subscribe((data: any) => {
      if (!data.isError) {
        debugger;
        this.totalItemCount = data.result.count;
        this.materials = data.result.data;
      }
    })
  }

  pageChanged(event:any) {
    this.materials = [];
    this.currentPage = event;
    this.getStock();
  }

  changePerPageValue(page:any) {
    if (page != 0 && page !== null) {
      this.materials = [];
      this.currentPage = 1;
      this.getStock();
    }
  }

  lessorChanged() {
    this.selectedLessor = this.lessors ? this.lessors.find(p => p.id == this.selectedLessorId) : undefined;
  }

}
