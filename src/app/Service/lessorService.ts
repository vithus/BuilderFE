import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Lessor } from '../Model/lessor';

@Injectable()

export class LessorService {

    constructor(private http: HttpClient) {}
    public baseUrl = environment.baseUrl;

    public addLessor(lessor: Lessor){
        return this.http.post(`${this.baseUrl}/v1.1/api/Lessor`,lessor);
    }
    public getAll(){
        return this.http.get(`${this.baseUrl}/v1.1/api/Lessor`);
    }
}
