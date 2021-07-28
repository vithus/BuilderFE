import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RentOut } from '../Model/rentout';

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
}
