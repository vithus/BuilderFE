import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RentIn } from '../Model/rentIn';

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
}
