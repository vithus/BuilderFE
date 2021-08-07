import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Material } from '../Model/material';

@Injectable()

export class MaterialService {

    constructor(private http: HttpClient) {}
    public baseUrl = environment.baseUrl;

    public addMaterial(material: Material){
        return this.http.post(`${this.baseUrl}/v1.1/api/Material`,material);
    }

    public getAll(pageNumber:number, pageSize:number){
        return this.http.get(`${this.baseUrl}/v1.1/api/Material?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }

    public getLessorMaterial(lessorId: string|null){
        let url ='/v1.1/api/Material/lessor-material';
        if(lessorId){
            url = url + `?lessorId=${lessorId}`        
        }
        return this.http.get(`${this.baseUrl}`+url);
    }

    public getPaginatedLessorMaterial(lessorId: string|null, pageNumber:number, pageSize:number){
        let url =`/v1.1/api/Material/lessor-material/paginated?pageSize=${pageSize}&pageNumber=${pageNumber}`;
        if(lessorId){
            url = url + `&lessorId=${lessorId}`        
        }
        return this.http.get(`${this.baseUrl}`+url);
    }
    
    
}
