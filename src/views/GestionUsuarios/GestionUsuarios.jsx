import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col, 
    Button
} from 'react-bootstrap';
import Table from '../../components/Table/Table';
import ModalAgente from '../../components/ModalAgente/ModalAgente';
import datos from '../../data';

const GestionUsuarios = () => {
    const [Agentes, setAgentes]=useState([])
    const [OpenModalAgente, setOpenModalAgente] = useState(false)
    const [agenteSelected, setAgenteSelected] = useState(null)

    useEffect(()=>{
        setAgentes(datos);
    },[])

    useEffect(()=>{
        if(agenteSelected!=null){
            setOpenModalAgente(true)
        }else{
            setOpenModalAgente(false)
        }
    },[agenteSelected])

    const NuevoUsuario = () => {
        setAgenteSelected(null)
        setOpenModalAgente(true);
    }

    return (
        <Container>
            <Row className='justify-content-center text-center my-3 border-bottom border-3'>
                <Col><h2>Gestion de usuarios</h2></Col>
            </Row>
            <Row className='mb-3'>
                <Col className='text-end'>
                    <Button
                        variant='primary'
                        onClick={()=>{NuevoUsuario()}}
                    >Nuevo</Button>
                </Col>
            </Row>
            <Row>
                <Table
                    Datos={Agentes}
                    setAgente={setAgenteSelected}
                />
            </Row>
            <ModalAgente
                show={OpenModalAgente}
                setShow={setOpenModalAgente}
                Agente={agenteSelected}
                setAgente={setAgenteSelected}
            />
        </Container>
    );
};

export default GestionUsuarios;