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

    public getAll(){
        return this.http.get(`${this.baseUrl}/v1.1/api/Material`);
    }
}
