import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RentIn, RentinDetail } from '../Model/rentIn';
import { RentInReturn } from '../Model/rentInReturn';
import { Payment } from '../Model/payment';

@Injectable()

export class RentInService {

    constructor(private http: HttpClient) {}
    public baseUrl = environment.baseUrl;

    public addRentIn(rentIn: RentIn){
        return this.http.post(`${this.baseUrl}/v1.1/api/RentIn`,rentIn);
    }

    public getAll(){
        return this.http.get(`${this.baseUrl}/v1.1/api/RentIn`);
    }

    public getPendingRentalReferences(lessorId:string|null=null){
        let uri = `${this.baseUrl}/v1.1/api/RentIn/pending-rental`;
        if(lessorId){
            uri = uri+'?lessorId='+lessorId;
        }
        return this.http.get(uri);
    }

    public get(id:string, includes: string[])
    {
        let uri = `${this.baseUrl}/v1.1/api/RentIn/${id}`;
        if(includes && includes.length) {
            uri = uri+`?includes=${includes.join()}`
        }
        return this.http.get(uri);
    }

    public returnMaterial(rentinReturns: RentInReturn[],rentalId:string|null){
        
        return this.http.post(`${this.baseUrl}/v1.1/api/RentIn/return-material/${rentalId}`,rentinReturns);
    }
    public makePayment(payment: Payment,lesseeId:string){
        
        return this.http.post(`${this.baseUrl}/v1.1/api/RentIn/payment/${lesseeId}`,payment);
    }

}
