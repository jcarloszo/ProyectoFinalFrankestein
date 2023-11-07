import { useState,useEffect} from "react";
import { EmployeeClass } from "../models/employee";

const useEmployees = () =>{
    
    const [employees, setEmployees] = useState<IEmployee[]>([{ id: 0, name: '', dni: 0 , nivel: '',funcion:''}]);
    
    const [error,setError] = useState(null);

    useEffect(()=>{
        const obtenerEmpleados = ()=>{
            try{ 

                const empleados : IEmployee[] = [
                    {id:0,name:'Juan',dni:88970,nivel:'A',funcion:'B'},
                    {id:1,name:'Juan',dni:88970,nivel:'A',funcion:'B'},
                ];

                setEmployees(empleados);

            }catch(error){
                setError(error);
            }
        };
        obtenerEmpleados();
    }
    ,[])


    const findEmployee = (employee:EmployeeClass) =>{ 
        
        const empleado  = employees?.forEach((element:IEmployee)=>{
            if(element.id == employee.id || element.dni == employee.dni){
                return element
            }
        })

        if(empleado!=null){
            console.log("Se ha encontrado el empleado")
            return empleado;
        }else{
            return null;
        }

    }


    const agregarEmpleado = (newEmployee:EmployeeClass) =>  {
        try {
            const employee = findEmployee(newEmployee)
            employee ? null : employees?.push(newEmployee);
            console.log('Empleado registrado con exito')
        } catch (error) {
            setError(error);
        }
    }

    const updateEmployee = (updateEmployee: EmployeeClass) => {
        try {
            const employee = findEmployee(updateEmployee);

            if(employee){
                Object.assign(employee,updateEmployee);
            }else{
                throw "No se encontro al empleado"
            }

        }catch(error){ 
            setError(error);
        }
    }


    const eliminarEmpleado =  (idEmpleado: number) => {
        try {

            const empleadoEliminar = new EmployeeClass(idEmpleado);
            const empleado = findEmployee(empleadoEliminar)
            
            if(empleado){
                employees?.filter((employee:IEmployee) => {
                    if(employee.id != idEmpleado) {
                        return employee
                    }
                })
            }

            console.log("Se ha eliminado el empleado:" + idEmpleado)
        }catch (error) {
            setError(error);
        }
    }

    return {employees,error,agregarEmpleado,updateEmployee,eliminarEmpleado}
}

export default useEmployees;