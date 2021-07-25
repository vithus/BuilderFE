import { ValidationResult } from "./validationResult";

export class Inventory {
    id: string |null =null;
    materialId: string | null = null;
    quantity: number =0;

    isValid(): ValidationResult {
        const result = new ValidationResult();
        if(!this.materialId || this.materialId ===""){
            result.status = false;
            result.message = "Material is required"
        }    
        else if(!this.quantity || this.quantity ===0){
            result.status = false;
            result.message = "Quantity is required"
        }
        return result;      
    }
}