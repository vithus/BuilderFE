import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/Auth/token.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private tokenService : TokenService) { }

  ngOnInit(): void {
  }

  logout(){
    this.tokenService.remove();
    window.location.reload();
  }
}
