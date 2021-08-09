import { Component, OnInit } from '@angular/core';
import { NgxMaterialSpinnerService } from 'ngx-material-spinner';
import { LoginModel } from 'src/app/Model/loginModel';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { AuthorizationService } from 'src/app/Service/authorizationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel : LoginModel = new LoginModel(); 
  constructor(private authService: AuthorizationService,private tokenService : TokenService,
    private spinner: NgxMaterialSpinnerService ) { }

  ngOnInit(): void {
     
  }

  login() {
    var validationResult = this.loginModel.isValid();
    if(!validationResult.status) {
      alert(validationResult.message);
      return;
    }
    this.spinner.show('primary');
    this.authService.login(this.loginModel).subscribe((data:any)=>{
          if(!data.isError){
              this.tokenService.set(data.result.token);
              window.location.reload();
          } else{
            alert(data.error.detail);
          }
          this.spinner.hide('primary');
    },(error)=>{
      this.spinner.hide('primary');
      alert(error.error.error.detail);
      console.log("error");
    });
  }

  
}
