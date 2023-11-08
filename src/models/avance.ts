
export class Avance { 
    id:number;
    date: Date;
    tareas: any[];
    usuario:string ;

    constructor(obj:any){  
        this.id = obj.id
        this.date = obj.date
        this.tareas = obj.tareas
        this.usuario = obj.usuario
    }
}