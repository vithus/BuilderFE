import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/Auth/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private tokenService : TokenService) { }

  fullName:string='';
  ngOnInit(): void {
    this.getFullName();
  }

  getFullName() {
    this.fullName = this.tokenService.getFullName();
  }
}
