import { Dependency } from "./dependency";
import { EmployeeClass } from "./employee";

export class Tarea { 
    id:number;
    description: Date;
    date: Date;
    employee: EmployeeClass;

    constructor(obj:any){  
        this.id = obj.id
        this.description = obj.description
        this.date = obj.date
        this.employee = obj.employee
    }
}

export default Tarea;