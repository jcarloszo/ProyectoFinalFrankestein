import { Dependency } from "../models/dependency";
import { EmployeeClass } from "../models/employee";

export interface IInforme {
    id:number;
    date: Date;
    dependency: Dependency;
    employee: EmployeeClass;
}