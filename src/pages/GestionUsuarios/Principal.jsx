import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col, 
    Button
} from 'react-bootstrap';
import Table from '../../components/Table/Table';
import FormCargaAgente from './FormCargaAgente';
import datos from '../../../data';

const GestionUsuarios = () => {
    const [Agentes, setAgentes]=useState([])
    const [OpenModalAgente, setOpenModalAgente] = useState(false)

    useEffect(()=>{
        setAgentes(datos);
    },[])

    const NuevoUsuario = () => {
        console.log("Vista Nuevo Usuario");
        setOpenModalAgente(true);
    }

    return (
        <Container>
            <Row className='justify-content-center text-center mb-3'>
                <Col className='bg-primary text-white'><h1>Gestion de usuarios</h1></Col>
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
                />
            </Row>
            <FormCargaAgente
                show={OpenModalAgente}
                setShow={setOpenModalAgente}
            />
        </Container>
    );
};

export default GestionUsuarios;