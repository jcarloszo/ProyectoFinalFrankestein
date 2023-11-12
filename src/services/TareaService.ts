import { useState,useEffect} from "react";
import { Dependency } from "../models/dependency";
import Tarea from "../models/tarea.ts";

const useTareas = () =>{

    const [tareas,setTareas] = useState<Tarea[]>([]);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const obtenerTareas = () =>{
            try{ 
                const tareas : Tarea[] = [
                    new Tarea({id:0,description:'IR A HOSPITAL XXX UBICADO EN XXXX',date:new Date(),employee:'agente'}),
                    new Tarea({id:1,description:'IR A HOSPITAL YYY UBICADO EN 9999',date:new Date(),employee:'agente'}),
                    new Tarea({id:2,description:'IR A HOSPITAL CCC UBICADO EN 8888',date:new Date(),employee:'agente'}),
                ]
                setTareas(tareas);
            }catch(error){
                setError(error);
            }
        };
        obtenerTareas();
    }
    ,[])

    return {tareas,error}
}

export default useTareas;