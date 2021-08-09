import { ValidationResult } from "./validationResult";

export class Payment{
    id:string |null =null;
    paymentMode: number=1;
    payeeOrPayor: string|null=null;
    paymentRef: string|null=null;
    reason: string|null =null;
    amount:number=0;
    createdOn:Date|null=null;

    isValid(): ValidationResult {
        const result = new ValidationResult();
        if(this.amount<=0){
            result.status = false;
            result.message = "Amount is required"
        }      
        return result;      
    }
}