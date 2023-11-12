export class Dependency{
    id:number;
    name: string; 
    section: string;
    direction: string;

    constructor(obj:any){  
        this.id = obj.id
        this.direction = obj.direction
        this.name = obj.name
        this.section = obj.section 
    }

}