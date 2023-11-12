import { useState,useEffect} from "react";
import { Dependency } from "../models/dependency.ts";

const useDependencies = () =>{

    const [dependencies,setDependencies] = useState<Dependency[]>([]);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const obtenerDependencias = ()=>{
            try{ 
                const dependencies :Dependency[] = [
                    new Dependency({id:0,name:'AAA',section:'A',direction:'BBBB'}),
                    new Dependency({id:1,name:'BBB',section:'B',direction:'CCCC'}),
                    new Dependency({id:2,name:'CCC',section:'C',direction:'DDDD'})
                ]
                setDependencies(dependencies);
            }catch(error){
                setError(error);
            }
        };
        obtenerDependencias();
    }
    ,[])

    return {dependencies,error}
}

export default useDependencies;