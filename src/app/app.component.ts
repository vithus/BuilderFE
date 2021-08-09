import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './Service/Auth/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BuilderFe';
  isActive : boolean;

  constructor(
    private token: TokenService, private router: Router
  ) {
this.isActive = this.token.loggedIn();
if(this.isActive){
  this.router.navigateByUrl('/');
}else{
  this.router.navigateByUrl('/login');
}
   }
}
