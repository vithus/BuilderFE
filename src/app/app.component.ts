import { Component } from '@angular/core';
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
    private token: TokenService
  ) {
this.isActive = this.token.loggedIn();
console.log(this.isActive);
   }
}
