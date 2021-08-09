import { ValidationResult } from "./validationResult";

export class LoginModel {
    userName:string='';
    password:string='';

    isValid(): ValidationResult {
        const result = new ValidationResult();
        if(!this.userName || this.userName ===""){
            result.status = false;
            result.message = "Username is required"
        }
        else if(!this.password || this.password ===""){
            result.status = false;
            result.message = "Password is required"
        }    
        return result;      
    }
}