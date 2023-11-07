import React, { useState } from 'react';
import {
    Modal,
    Button,
    Form,
    Row,
    Col,
    InputGroup
} from 'react-bootstrap';
import { Search } from "react-bootstrap-icons";


const ModalAgente = ({show, setShow, Agente, setAgente}) => {
    const handleClose = () => {setShow(false)}
    const handleSubmit = (e) => {
        console.log(e);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Modal
                    onHide={handleClose}
                    show={show}
                    size="lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {Agente != null ? `Modificacion agente`: `Alta Agente`}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='mb-3'>
                            <InputGroup>
                                <InputGroup.Text><Search/></InputGroup.Text>
                                <Form.Control type='text' placeholder='Documento'/>
                                <Button>Buscar</Button>
                            </InputGroup>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="nombre" as={Row}>
                                <Form.Label column sm={2}>
                                    Nombre
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        value={Agente!=null?Agente.nombre:""} 
                                        type="text"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="apellido" as={Row}>
                                <Form.Label column sm={2}>
                                    Apellido
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        value={Agente!=null?Agente.apellido:""}
                                        type="text"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="documento" as={Row}>
                                <Form.Label column sm={2}>
                                    Documento
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control 
                                        value={Agente!=null?Agente.documento:""}
                                        type="number"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="telefono" as={Row}>
                                <Form.Label column sm={2}>
                                    Telefono
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control 
                                        value={Agente!=null?Agente.telefono:""}
                                        type="number"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="mail" as={Row}>
                                <Form.Label column sm={2}>
                                    Mail
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control 
                                        value={Agente!=null?Agente.email:""}
                                        type="email"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="puesto" as={Row}>
                                <Form.Label column sm={2}>
                                    Puesto Actual
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control 
                                        value={Agente!=null?Agente.dependencia:""}
                                        type="text"
                                    />
                                </Col>
                            </Form.Group>
                            <hr/>
                            <Form.Group controlId="rol">
                                <Form.Label>Rol de Usuario</Form.Label>
                                <Form.Select defaultValue="Inspector">
                                    <option>Inspector</option>
                                    <option>Administrador</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer className='justify-content-between'>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleClose}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </div>
    );
};

export default ModalAgente;