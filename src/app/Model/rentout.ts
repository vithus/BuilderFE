import * as moment from "moment";
import { ValidationResult } from "./validationResult";

export class RentOut{
    Id:string|null=null;
    LesseeId:string | null = null;
    dateString:string ='';
    dueDateString: string =  '';
    advance: number = 0;
    transportCharge:number = 0;
    labourCharge: number =0;
    totalAmount: number =0;
    rentalDetails : RentalDetail[] = [];
    remark:string='';

    isValid(): ValidationResult {
        const result = new ValidationResult();
        if(!this.LesseeId || this.LesseeId ===""){
            result.status = false;
            result.message = "Lessee is required"
        }
        else if(!this.dateString || this.dateString === ""){
            result.status = false;
            result.message = "Date is required"
        }
        else if(!this.dueDateString || this.dueDateString ===""){
            result.status = false;
            result.message = "Due date is required"
        }
        else if(this.rentalDetails.length == 0){
            result.status = false;
            result.message = "Material should be added"
        }      
        return result;      
    }
}

export class RentalDetail {
    Id:string|null=null;
    materialId:string|null=null;
    materialName:string = '';
    quantity:number=0;
    rentalPerUnit:number=0;
    remark:string | null=null;
    unit:string | null=null;
    lessorId: string|null=null;
}