import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Inventory } from '../Model/inventory';
import { LoginModel } from '../Model/loginModel';

@Injectable()

export class AuthorizationService {

    constructor(private http: HttpClient) {}
    public baseUrl = environment.baseUrl;

    public login(loginBody: LoginModel){
        return this.http.post(`${this.baseUrl}/v1.1/api/Authorize/login`,loginBody);
    }
}
