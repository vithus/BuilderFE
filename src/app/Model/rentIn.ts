export class RentIn {

    id:string|null = null;
    lessorId: string = '';
    date: Date |null = null;
    dueDate: Date |null = null;
    advance :number=0;
    transportCharge: number =0;
    labourCharge: number =0;
    totalAmount:number =0;
    remark:string ='';
    rentInDetails : RentalDetail[]=[];
}

export class RentalDetail {
    id:string|null = null;
    materialId:string|null=null;
    materialName:string ='';
    quantity:number =0;
    unit:string ='';
    rentalPerUnit:number =0;
    remark:string=''
}


