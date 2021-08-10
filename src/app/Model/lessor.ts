import { ValidationResult } from "./validationResult";

export class Lessor {
    id: string | null = null;
    referenceNo:number|null=null;
    shortName: string='';
    fullName: string='';
    organizationName: string='';
    registrationDetail: string='';
    identityNo: string='';
    address:string='';
    contactNo1:string='';
    contactNo2:string='';
    agreementRef:string='';
    remarks: string='';
    others: string='';

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