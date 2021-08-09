import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Lessee } from '../Model/lessee';

@Injectable()

export class LesseeService {

    constructor(private http: HttpClient) {}
    public baseUrl = environment.baseUrl;

    public addLessee(lessee: Lessee){
        return this.http.post(`${this.baseUrl}/v1.1/api/Lessee`,lessee);
    }
    public getAll( pageNumber:number|null=null, pageSize:number|null=null){
        let url =`/v1.1/api/Lessee`;
        if(pageNumber && pageSize){
            url = url + `?pageSize=${pageSize}&pageNumber=${pageNumber}`;     
        }
        return this.http.get(`${this.baseUrl}`+url);
    }
    public updateLessee(lessee: Lessee){
        return this.http.put(`${this.baseUrl}/v1.1/api/Lessee`,lessee);
    }
}
