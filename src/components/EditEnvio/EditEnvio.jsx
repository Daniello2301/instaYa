import React from "react";
import { Container, Form, FormGroup, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { GrSend } from 'react-icons/gr'

import NavbarComponent from "../navbar/Navbar";
import './EditEnvio.css'


function EditEnvio(){

    return(
        <>     
            <NavbarComponent />
            <Container className="mt-4">
                <h1 className="text-center">Editar Envío</h1>
                <Row className="form-container">
                    <Col>
                        <div className="image" >
                            <GrSend className="img"/>
                        </div>
                    </Col>
                    <Col>
                        <Form className="form-edit-send">
                            <Row>
                                <Col>
                                    <FormGroupChild classI={"input-date mb-3"} controlId={"input-date"} label={"Fecha"} type={"date"} />
                                </Col>
                                <Col>
                                    <FormGroupChild classI={"input-time mb-3"} controlId={"input-time"} label={"Hora"} type={"time"} />
                                </Col>
                                <Col>
                                    <FormGroup className="input-select mb-3" controlId="input-select" >
                                        <Form.Label> Estado </Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>------</option>
                                            <option value="1">Enviado</option>
                                            <option value="2">Entregado</option> 
                                            <option value="3">En Bodega</option>
                                            <option value="4">Cancelado</option>
                                        </Form.Select>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroupChild classI={"input-large mb-3"} controlId={"input-large"} label={"Largo"} type={"number"} placeholder={"Centimetros"} />
                                </Col>
                                <Col>                        
                                    <FormGroupChild classI={"input-whidth mb-3"} controlId={"input-whidth"} label={"Ancho"} type={"number"} placeholder={"Centimetros"} />
                                </Col>
                                <Col>                        
                                    <FormGroupChild classI={"input-height mb-3"} controlId={"input-heigh"} label={"Alto"} type={"number"} placeholder={"Centimetros"} />
                                </Col>
                                <Col>                        
                                    <FormGroupChild classI={"input-weight mb-3"} controlId={"input-weight"} label={"Peso"} type={"number"} placeholder={"Kg"} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroupChild classI={"input-address-sen mb-3"} controlId={"input-address-send"} label={"Direccion Recogida"} type={"text"} placeholder={""} />
                                </Col>
                                <Col>
                                    <FormGroupChild classI={"input-city-send mb-3"} controlId={"input-city-send"} label={"Ciudad Recogida"} type={"text"} placeholder={""} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroupChild classI={"input-name mb-3"} controlId={"input-name"} label={"Nombre del destinatario"} type={"text"} placeholder={""} />
                                </Col>
                                <Col>
                                    <FormGroupChild classI={"input-identification mb-3"} controlId={"input-identification"} label={"Cédula Destinatario"} type={"number"} placeholder={""} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroupChild classI={"input-address-arrive mb-3"} controlId={"input-address-arrive"} label={"Direccion de Entrega"} type={"text"} placeholder={""} />
                                </Col>
                                <Col>
                                    <FormGroupChild classI={"input-city-arrive mb-3"} controlId={"input-city-arrive"} label={"Direccion de Entrega"} type={"Text"} placeholder={""} />
                                </Col>
                            </Row>
                            
                        </Form>
                    </Col>
                    <Row className="btn-control text-center mb-3">
                        <Col>
                            <NavLink to={"/sends"} className="btn btn-back"> Volver </NavLink>
                        </Col>
                        <Col>
                            <NavLink to={"/"} className="btn btn-save"> Guardar </NavLink>
                        </Col>
                    </Row>
                </Row>
            </Container> 
        </> 
    )

}

const FormGroupChild = ({classI, controlId, label, type, placeholder}) => {
    return(
        <>
        <Form.Group className={classI} controlId={controlId}>
            <Form.Label> {label} </Form.Label>
            <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
        </> 
    )
}

export default EditEnvio