import { EmployeeClass } from "../models/employee";

export default interface ITarea {
    id:number;
    description: string; 
    date: Date;
    employee: EmployeeClass;
}