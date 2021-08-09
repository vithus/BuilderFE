import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class DeActiveService  implements CanActivate {

  constructor(
    private token: TokenService
  ) { }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return !this.token.loggedIn();

  }
}

