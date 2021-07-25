import { ValidationResult } from "./validationResult";

export class Material{
    id: string |null = null;
    code: string ='';
    name: string ='';
    unit: string = '';
    rentalPrice: number =0;
    quantity: number=0;

    isValid(): ValidationResult {
        const result = new ValidationResult();
        if(!this.code || this.code ===""){
            result.status = false;
            result.message = "Code is required"
        }
        else if(!this.name || this.name ===""){
            result.status = false;
            result.message = "Name is required"
        }
        else if(!this.unit || this.unit ===""){
            result.status = false;
            result.message = "Unit is required"
        }
        else if(!this.rentalPrice || this.rentalPrice <= 0){
            result.status = false;
            result.message = "Rental price is required"
        }      
        return result;      
    }
}