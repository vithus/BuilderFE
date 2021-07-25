import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Inventory } from '../Model/inventory';

@Injectable()

export class InventoryService {

    constructor(private http: HttpClient) {}
    public baseUrl = environment.baseUrl;

    public addInventory(inventory: Inventory){
        return this.http.post(`${this.baseUrl}/v1.1/api/Inventory`,inventory);
    }
}
