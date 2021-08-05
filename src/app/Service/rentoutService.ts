import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RentOut } from '../Model/rentout';
import { RentalReturn } from '../Model/rentalReturn';

@Injectable()

export class RentOutService {

    constructor(private http: HttpClient) {}
    public baseUrl = environment.baseUrl;

    public addRentOut(rentOut: RentOut){
        return this.http.post(`${this.baseUrl}/v1.1/api/Rental`,rentOut);
    }

    public getAll(){
        return this.http.get(`${this.baseUrl}/v1.1/api/Rental`);
    }

    public getPendingRentalReferences(lesseeId:string|null=null){
        let uri = `${this.baseUrl}/v1.1/api/Rental/pending-rental`;
        if(lesseeId){
            uri = uri+'?lesseeId='+lesseeId;
        }
        return this.http.get(uri);
    }

    public get(id:string, includes: string[])
    {
        let uri = `${this.baseUrl}/v1.1/api/Rental/${id}`;
        if(includes && includes.length) {
            uri = uri+`?includes=${includes.join()}`
        }
        return this.http.get(uri);
    }

    public returnMaterial(rentalReturns: RentalReturn[],rentalId:string|null){
        
        return this.http.post(`${this.baseUrl}/v1.1/api/Rental/return-material/${rentalId}`,rentalReturns);
    }
    public getOverDue(){
        let uri = `${this.baseUrl}/v1.1/api/Rental/overdue-rental`;
      
        return this.http.get(uri);
    }
   
}
