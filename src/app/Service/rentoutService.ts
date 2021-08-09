import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RentOut } from '../Model/rentout';
import { RentalReturn } from '../Model/rentalReturn';
import { Payment } from '../Model/payment';

@Injectable()

export class RentOutService {

    constructor(private http: HttpClient) { }
    public baseUrl = environment.baseUrl;

    public addRentOut(rentOut: RentOut) {
        return this.http.post(`${this.baseUrl}/v1.1/api/Rental`, rentOut);
    }

    public getAll() {
        return this.http.get(`${this.baseUrl}/v1.1/api/Rental`);
    }

    public getPendingRentalReferences(lesseeId: string | null = null) {
        let uri = `${this.baseUrl}/v1.1/api/Rental/pending-rental`;
        if (lesseeId) {
            uri = uri + '?lesseeId=' + lesseeId;
        }
        return this.http.get(uri);
    }

    public get(id: string, includes: string[]) {
        let uri = `${this.baseUrl}/v1.1/api/Rental/${id}`;
        if (includes && includes.length) {
            uri = uri + `?includes=${includes.join()}`
        }
        return this.http.get(uri);
    }

    public returnMaterial(rentalReturns: RentalReturn[], rentalId: string | null) {

        return this.http.post(`${this.baseUrl}/v1.1/api/Rental/return-material/${rentalId}`, rentalReturns);
    }
    public getOverDue(lesseeId: string | null = null) {
        let uri = `${this.baseUrl}/v1.1/api/Rental/overdue-rental`;
        if (lesseeId) {
            uri = uri + `?lesseeId=${lesseeId}`
        }
        return this.http.get(uri);
    }
    public makePayment(payment: Payment, lessorId: string) {

        return this.http.post(`${this.baseUrl}/v1.1/api/Rental/payment/${lessorId}`, payment);
    }

    public getLesseeRentalDetails(lesseeId: string) {
        return this.http.get(`${this.baseUrl}/v1.1/api/Rental/lessee-rental-details/${lesseeId}`);

    }

    public getLesseeOverDueRentalDetails(lesseeId: string) {
        return this.http.get(`${this.baseUrl}/v1.1/api/Rental/lessee-overdue-rental-details/${lesseeId}`);

    }

    public getLesseePaymentInfo(lesseeId: string) {
        return this.http.get(`${this.baseUrl}/v1.1/api/Rental/lessee-payment-info/${lesseeId}`);

    }







}
