import { ValidationResult } from "./validationResult";

export class Lessee {
    id:string |null=null;
    shortName : string ='';
    fullName : string='';
    identityNo: string ='';
    organizationName: string ='';
    address: string ='';
    contactNo1: string ='';
    contactNo2: string ='';
    agreementRef:string='';
    gurantorName:string='';
    gurantorContactNo: string ='';
    gurantorIdentityNo : string =''
    gurantorAddress : string ='';
    remarks: string='';
    others: string ='';
    allowCredit: boolean = false;

    
    isValid(): ValidationResult {
        const result = new ValidationResult();
        if(!this.fullName || this.fullName ===""){
            result.status = false;
            result.message = "Full name is required"
        }
        else if(!this.identityNo || this.identityNo ===""){
            result.status = false;
            result.message = "NIC is required"
        }
        else if(!this.address || this.address ===""){
            result.status = false;
            result.message = "Address is required"
        }
        else if(!this.contactNo1 || this.contactNo1 ===""){
            result.status = false;
            result.message = "contact No is required"
        }
        return result;      
    }
}