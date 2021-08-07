import { Component, OnInit } from '@angular/core';
import { Lessee } from 'src/app/Model/lessee';
import { Lessor } from 'src/app/Model/lessor';
import { Payment } from 'src/app/Model/payment';
import { LesseeService } from 'src/app/Service/lesseeService';
import { LessorService } from 'src/app/Service/lessorService';
import { RentInService } from 'src/app/Service/rentInService';
import { RentOutService } from 'src/app/Service/rentoutService';

@Component({
  selector: 'app-paymentcertificate',
  templateUrl: './paymentcertificate.component.html',
  styleUrls: ['./paymentcertificate.component.scss']
})
export class PaymentcertificateComponent implements OnInit {

  selectedPayee: number = 1;
  lessees: Lessee[] =[];
  lessors: Lessor[]=[];
  selectedLessorId :string|null=null;
  selectedLesseId :string|null=null;
  patmentMode = [{id:1, type:'Cash'},{id:2, type:'Cheque'}]
  selectedPaymentMode:number=1;

  payment: Payment = new Payment();
  constructor(
    private lesseeService: LesseeService, 
    private lessorService : LessorService,
    private rentalService: RentOutService,
    private rentinService: RentInService) { }
  
  ngOnInit(): void {
    this.getLessees();
    this.getLessors();
  }

  payeeChanged(data:number) {
    this.selectedPayee = data;
  }

  getLessees() {
    this.lesseeService.getAll().subscribe((data: any) => {
      if (!data.isError) {
        this.lessees = data.result.data;
      }
    },
      (error) => {
        alert("Something went wrong");
        console.log(error);
      })
  }

  getLessors() {
    this.lessorService.getAll().subscribe((data:any)=>{
      if (!data.isError) {
        this.lessors = data.result.data;
      }
    },(error)=>{
      alert("Something went wrong");
      console.log(error);
    })
  }

  makePayment(){
    const validationStatus = this.payment.isValid();
    if(!validationStatus.status){
      alert(validationStatus.message);
      return;
    }
    if(this.selectedPayee==1){
      this.makePaymentForLessee();
    } else {
      this.makePaymentForLessor();
    }
  }

  reset() {
    this.payment = new Payment();
    this.selectedLessorId = null;
    this.selectedLesseId = null;
    this.selectedPaymentMode = 1;
  }

  makePaymentForLessee() {
    if(!this.selectedLesseId){
      alert("Please select a lessee");
      return;
    } 
    this.rentalService.makePayment(this.payment, this.selectedLesseId).subscribe((data:any)=>{
         if(!data.isError){
           alert("Payment has been made successfully");
           this.reset();
         }
    },(error)=>{
      alert("something went wrong");
    });

  }

  
  makePaymentForLessor() {
    if(!this.selectedLessorId){
      alert("Please select a lessee");
      return;
    } 
    this.rentinService.makePayment(this.payment, this.selectedLessorId).subscribe((data:any)=>{
         if(!data.isError){
           alert("Payment has been made successfully");
           this.reset();
         }
    },(error)=>{
      alert("something went wrong");
    });

  }
}
