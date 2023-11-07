import React, { useEffect, useState } from 'react';
import { 
    Table as TableBT, 
    Button,
    ButtonGroup
} from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Table = ({Datos, setAgente}) => {
    const eliminar = (index) => {
        Swal.fire({
            title: `Seguro que quiere eliminar el Agente ${Agentes[index].nombre}`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Confimar",
            denyButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Agente Eliminado!", "", "success");
            }
        })
    }

    const modificar = (index) => {
        setAgente(Datos[index])
    }

    return (
        <div>
            <TableBT responsive striped bordered hover>
                <thead className='text-center'>
                    <tr>
                        <th></th>
                        <th>DNI</th>
                        <th>Nombre y Apellido</th>
                        <th>Telefono</th>
                        <th>Mail</th>
                        <th>Puesto</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {Datos.map((dato, index)=>{
                            return (
                                <tr className='align-middle'>
                                    <td>
                                        <ButtonGroup vertical>
                                            <Button 
                                                size="sm"
                                                variant='secondary'
                                                onClick={()=>{eliminar(index)}}
                                            >Eliminar</Button>
                                            <Button
                                                size="sm"
                                                onClick={()=>{modificar(index)}}
                                            >Modificar</Button>
                                        </ButtonGroup>
                                    </td>
                                    <td>{dato.documento}</td>
                                    <td>{`${dato.nombre} ${dato.apellido}`}</td>
                                    <td>{dato.telefono}</td>
                                    <td>{dato.email}</td>
                                    <td>{dato.dependencia}</td>
                                </tr>             
                            )
                    })}
                </tbody>
            </TableBT>
        </div>
        
    );
};

export default Table;