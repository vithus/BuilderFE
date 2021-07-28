import { ValidationResult } from "./validationResult";

export class RentIn {

    id:string|null = null;
    lessorId: string = '';
    dateString:string ='';
    dueDateString: string =  '';
    advance :number=0;
    transportCharge: number =0;
    labourCharge: number =0;
    totalAmount:number =0;
    remark:string ='';
    rentInDetails : RentinDetail[]=[];

    isValid(): ValidationResult {
        const result = new ValidationResult();
        if(!this.lessorId || this.lessorId ===""){
            result.status = false;
            result.message = "Lessor is required"
        }
        else if(!this.dateString || this.dateString ===""){
            result.status = false;
            result.message = "Date is required"
        }
        else if(!this.dueDateString || this.dueDateString ===""){
            result.status = false;
            result.message = "Due date is required"
        }
        else if(this.rentInDetails.length == 0){
            result.status = false;
            result.message = "Material shoould be added"
        }      
        return result;      
    }
    
}

export class RentinDetail {
    id:string|null = null;
    materialId:string|null=null;
    materialName:string ='';
    quantity:number =0;
    unit:string ='';
    rentalPerUnit:number =0;
    remark:string=''
}


