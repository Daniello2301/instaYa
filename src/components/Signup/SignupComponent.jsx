import React from 'react';
import { useState } from 'react';

import * as API from '../../services/users-services'

import { Link } from 'react-router-dom'
import { Form, Button, Container, Alert, Col, Row } from 'react-bootstrap';

const SignUp = () => {

    const[id, setId] = useState(""); 
    const[name, setName] = useState(""); 
    const[lastname, setLastname] = useState(""); 
    const[address, setAddress] = useState(""); 
    const[city, setCity] = useState(""); 
    const[username, setUsename] = useState(""); 
    const[email, setEmail] = useState(""); 
    const[password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const data = {
        identification:id,
        name:name,
        lastname:lastname,
        address:address,
        city:city,
        username:username,
        email:email,
        password:password
    }


    const handleSubmit = async (e) => {
        
        try {
            e.preventDefault();
            await API.signup(data)
            .then((result) => { 
                setRegister(true)
                console.log(result); });
            resetDataForm();

        } catch (error) {
            console.log(error);
        }

        
    }


    const resetDataForm =() => {
        setId:''
        setName:''
        setLastname:''
        setAddress:''
        setCity:''
        setUsename:''
        setEmail:''
        setPassword:''
    }

    return(
        <>
            <Container>
                <h2 className="text-center">Registro de Usuario</h2>
                {
                    register ? 
                    (
                        <Alert variant='success'> Submited </Alert>
                    )
                    :
                    (
                        <Alert variant='danger'> Ohh No! </Alert>
                    )
                }
                <Form>
                    <Form.Group controlId="id" className="m-3">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter your identifcation number" name="id" value={id} 
                         onChange={(e) => setId(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="name" className="m-3">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter Name" name="name" value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="lastname" className="m-3">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter Lastname" name="lastname" value={lastname} 
                        onChange={(e) => setLastname(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="address" className="m-3">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter address location" name="address" value={address} 
                        onChange={(e) => setAddress(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="city" className="m-3">
                       {/*  <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter city location" name="city" value={city}
                        onChange={(e) => setCity(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="username" className="m-3">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter userName" name="username" value={username} 
                        onChange={(e) => setUsename(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="email" className="m-3">
                       {/*  <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="password" className="m-3">
                       {/*  <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="password" placeholder="Enter password" name="password" value={password} 
                        onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Row>
                        <Col>
                            <Button variant="primary" type="submit" className="m-3" 
                            onClick={(e) => handleSubmit(e)}>
                                Registrarse
                            </Button>
                        </Col>
                        <Col>
                            <Link to={"/login"} type="submit" className="m-3 btn btn-secondary">
                               Iniciar Sesion
                            </Link>
                        </Col>
                    </Row>

                </Form>
            </Container>
        </>
    )
}

export default SignUp;