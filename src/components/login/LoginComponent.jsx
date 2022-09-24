import { useState } from 'react'

import {Link} from 'react-router-dom'
import {Form } from 'react-bootstrap'

import "./Login.css";

function LoginComponent(){ 

    const [validate, setValidate] = useState(true)
    const [path, setPath] = useState('/')
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
      
    const onUpdateField = e => {
        const nextFormState = {
        ...form,
        [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    };

    const submitForm = () => {
        var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        var passid_len = form.password.length;
        if (!form.email.match(formato_email)) {
          alert("Debes ingresar un email electronico valido!");
          focus()
          setValidate(false)//Para la parte dos, que los datos se conserven
        }else if(passid_len <= 8){
            alert("Debes ingresar una password con mas de 8 caracteres");
            focus()//Para la parte dos, que los datos se conserven
        }else{
            setValidate(true)//Para la parte dos, que los datos se conserven
            setPath('/HomePage')
        }
        console.log(validate);
      };


    

    return(
        <>  
            <div className='contenedor'>
                <h1 className='text-center mt-3'>Iniciar Sesion</h1>
                <div className='login-container d-flex align-items-center justify-content-center w-100 my-5'>
                    <div className='login-image'>
                        <img src=''/>
                    </div>
                    <Form id="formLogin" style={{width:450+"px"}}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control type="email" 
                                placeholder="Enter email" 
                                id="email" 
                                name="email" 
                                value={form.email} 
                                onChange={onUpdateField} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" 
                                placeholder="Password" 
                                id="password" 
                                name="password" 
                                value={form.password}  
                                onChange={onUpdateField}/>
                        </Form.Group>
                        <Link to={`${path}`} className='btn btn-primary' onClick={submitForm} > Submit </Link>
                    </Form>    
                </div>
            </div>
        </>
    )
}

export default LoginComponent