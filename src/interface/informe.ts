import { Dependency } from "../models/dependency";

export interface IInforme {
    id:number;
    date: Date;
    dependency: Dependency;
    employee: Employee;
}