import { Component, OnInit } from '@angular/core';
import { RentOutService } from 'src/app/Service/rentoutService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  rentals :any[] =[];
  itemsPerPage = 12;
  currentPage = 1;
  totalItemCount = 0;

  constructor(private rentalService : RentOutService) { }

  ngOnInit(): void {
    this.GetOverDueRentals();
  }

  pageChanged(event:any) {
    this.rentals = [];
    this.currentPage = event;
    this.GetOverDueRentals();
  }

  changePerPageValue(page:any) {
    if (page != 0 && page !== null) {
      this.rentals = [];
      this.currentPage = 1;
      this.GetOverDueRentals();
    }
  }

  GetOverDueRentals (){
    this.rentalService.getOverDue().subscribe((data:any)=>{
      if (!data.isError) {
        debugger;
        this.totalItemCount = data.result.count;
        this.rentals = data.result;
      }
    })
  }
}
