import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor() { }



  set(token: string): void {
    localStorage.setItem('token', token);
  }


  get(): any {
    return localStorage.getItem('token');
  }


  getClientToken(): any {
    return localStorage.getItem('clientToken');
  }


  remove(): any {
    localStorage.removeItem('token');
  }


  isValid(): boolean {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return (payload.iss === '19fae615-668a-4f8b-90d3-4a22f2108220_ozunu') ? true : false;
      }
    }
    return false;
  }

  getFullName(): string {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return payload.FirstName + ' ' + payload.LastName;
      }
    }
    return '';
  }



  payload(token: string): any {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }


  decode(payload: string): void {
    return JSON.parse(atob(payload));
  }


  loggedIn(): boolean {
    return this.isValid();
  }
}
