export class EmployeeClass{
    id: number;
    name: string; 
    dni: number;
    nivel: string;
    funcion: string;

    constructor(obj:any) {
        this.id = obj.id;
        this.name = obj.name;
        this.dni = obj.dni; 
        this.nivel = obj.nivel;
        this.funcion = obj.nivel;
    }

    
}