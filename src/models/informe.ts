import { Dependency } from "./dependency";
import { EmployeeClass } from "./employee";

export class Informe { 
    id:number;
    date: Date;
    dependency: Dependency;
    employee: EmployeeClass;

    constructor(obj:any){  
        this.id = obj.id
        this.date = obj.date
        this.dependency = obj.dependency
        this.employee = obj.employee
    }
}

export default Informe;