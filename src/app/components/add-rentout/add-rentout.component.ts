import { Component, OnInit,Inject } from '@angular/core';
import * as moment from 'moment';
import { NgxMaterialSpinnerService } from 'ngx-material-spinner';
import { Lessee } from 'src/app/Model/lessee';
import { Lessor } from 'src/app/Model/lessor';
import { Material } from 'src/app/Model/material';
import { RentalDetail, RentOut } from 'src/app/Model/rentout';
import { LesseeService } from 'src/app/Service/lesseeService';
import { LessorService } from 'src/app/Service/lessorService';
import { MaterialService } from 'src/app/Service/materialService';
import { RentOutService } from 'src/app/Service/rentoutService';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LesseeprofileComponent } from '../lesseeprofile/lesseeprofile.component';
import { LesseeProfileModalComponent } from './lessee-profile-modal/lessee-profile-modal.component';


@Component({
  selector: 'app-add-rentout',
  templateUrl: './add-rentout.component.html',
  styleUrls: ['./add-rentout.component.scss']
})
export class AddRentoutComponent implements OnInit {

  constructor(private lesseeService: LesseeService,
    private lessorService: LessorService,
    private materialService: MaterialService,
    private rentOutService: RentOutService,
    private spinner: NgxMaterialSpinnerService,
    public dialog: MatDialog
) { }

  materials: Material[] = [];
  lessors: Lessor[] = [];
  lessees: Lessee[] = [];

  rentout: RentOut = new RentOut();

  selectedLessorId = '';
  selectedLessor: Lessor | undefined = undefined;

  selectedMaterialId = '';
  selectedMaterial: Material | undefined = undefined;

  quantity: number = 0;
  remark: string = '';
  rentalPerUnit: number = 0;
  maxQuantity: number =0;

  ngOnInit(): void {
    this.getLessor();
    this.getLessee();
  }

  getLessee() {
    this.spinner.show('primary');
    this.lesseeService.getAll().subscribe((data: any) => {
      if (!data.isError) {
        this.lessees = data.result.data;
        this.spinner.hide('primary');
      }
    },
      (error) => {
        console.log(error);
        this.spinner.hide('primary');
      })
  }

  getLessor() {
    const own = new Lessor();
    own.id = null;
    own.fullName = "Own";
    this.lessors.push(own);
    this.spinner.show('primary');
    this.lessorService.getAll().subscribe((data: any) => {
      if (!data.isError) {
        data.result.data.forEach((e: Lessor) => {
          this.lessors.push(e);
        });
        ;
      }
      this.spinner.hide('primary');
    },
      (error) => {
        console.log(error);
        this.spinner.hide('primary');
      })
  }

  lessorChanged() {
    this.selectedLessor = this.lessors ? this.lessors.find(p => p.id == this.selectedLessorId) : undefined;
    console.log("Lessor Changed");
    this.materials = [];
    this.selectedMaterialId ='';
    this.selectedMaterial = undefined;
    this.getLessorMaterial();
    this.quantity = 0;
    this.rentalPerUnit = 0;
    this.remark = '';
  }

  materialChanged() {
    this.selectedMaterial = this.materials ? this.materials.find(p => p.id === this.selectedMaterialId) : undefined;
    this.rentalPerUnit = this.selectedMaterial ? this.selectedMaterial?.rentalPrice : 0;
    this.maxQuantity = this.selectedMaterial? this.selectedMaterial.quantity :0;
  }

  getLessorMaterial() {
    debugger;
    this.spinner.show('primary');
    let lessorId = this.selectedLessor ? this.selectedLessor.id : null;
    this.materialService.getLessorMaterial(lessorId).subscribe((data: any) => {
      if (!data.isError) {
        this.spinner.hide('primary');
        this.materials = data.result;
      }
    },(error)=>{
      this.spinner.hide('primary');
      console.log(error);
    })
  }

  addItem() {
    if (this.selectedMaterial == undefined || this.selectedMaterial === null || this.quantity <=0) {
      return;
    }
    if(Number(this.quantity) > this.selectedMaterial.quantity){
      alert("The available quantity is "+this.selectedMaterial.quantity);
      return;
    }
    const rentailDetail = new RentalDetail();
    rentailDetail.materialId = this.selectedMaterial ? this.selectedMaterial.id : null;
    rentailDetail.materialName = this.selectedMaterial ? this.selectedMaterial?.name : '';
    rentailDetail.quantity = this.quantity;
    rentailDetail.remark = this.remark;
    rentailDetail.unit = this.selectedMaterial ? this.selectedMaterial.unit : '';
    rentailDetail.rentalPerUnit = this.rentalPerUnit;
    rentailDetail.lessorId = this.selectedLessor? this.selectedLessor.id : null;
    this.rentout.rentalDetails.push(rentailDetail);

    this.selectedMaterial = undefined;
    this.selectedMaterialId = '';
    this.selectedLessor = undefined;
    this.selectedLessorId = '';
    this.quantity = 0;
    this.remark = '';
    this.rentalPerUnit = 0;

    this.calculateTotal();
  }

  removeItem(rentalDetail: RentalDetail) {
    const index = this.rentout.rentalDetails.indexOf(rentalDetail);
    this.rentout.rentalDetails.splice(index);
  }

  save() {
    var validationStatus = this.rentout.isValid();
    if(!validationStatus.status){
      alert(validationStatus.message);
      return;
    }
    this.spinner.show('primary');
    this.rentOutService.addRentOut(this.rentout).subscribe((data: any)=>{
       if(!data.isError) {
        alert("Rentin details has been addedd successfully");
        this.rentout = new RentOut();
        this.selectedMaterialId = '';
        this.selectedMaterial = undefined;
        this.selectedLessorId = '';
        this.selectedLessor = undefined;
        this.rentalPerUnit = 0;
        this.remark = '';
        this.quantity = 0;
       }
       this.spinner.hide('primary');
    },(error)=>{
      alert("Something went wrong");
      this.spinner.hide('primary');
    })
  }

  calculateTotal() {
    let noOfDays=1
    if(this.rentout.dateString && this.rentout.dueDateString) {
      var date1 = new Date(this.rentout.dateString);
      var date2 = new Date(this.rentout.dueDateString);
      var Difference_In_Time = date2.getTime() - date1.getTime(); 
      noOfDays = Difference_In_Time / (1000 * 3600 * 24);
    }
    this.rentout.totalAmount = Number(this.rentout.labourCharge) + Number(this.rentout.transportCharge);
    let itemAmount = 0;
    this.rentout.rentalDetails.forEach(element => {
      itemAmount += Number(element.quantity) * Number(element.rentalPerUnit);
    });
    this.rentout.totalAmount += (itemAmount * noOfDays);
  }


  dateChanged($event:any) {
    this.rentout.dateString =$event.value.toLocaleDateString();
    this.calculateTotal();
  }

  dueDateChanged($event:any) {
    this.rentout.dueDateString = $event.value.toLocaleDateString();
    this.calculateTotal();
  }


  viewLesseeProfile(): void {
    if(this.rentout.lesseeId){
      var selectedLessee =  this.lessees.find(p=>p.id==this.rentout.lesseeId);
      const dialogRef = this.dialog.open(LesseeProfileModalComponent, {
        width: '100%',
        data: {lessee: selectedLessee}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });
    }
    
  }

  cancel() {
    this.rentout = new RentOut();
    this.selectedMaterialId = '';
    this.selectedMaterial = undefined;
    this.selectedLessorId = '';
    this.selectedLessor = undefined;
    this.rentalPerUnit = 0;
    this.remark = '';
    this.quantity = 0;
  }

  print() {
    window.print();
  }



}
