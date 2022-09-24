import { useState } from 'React'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import "./SignupComponent.css";
import Container from "react-bootstrap/Container";
import NavbarComponent from "../navbar/Navbar";

function SignupComponent() {

    const [validate, setValidate] = useState(true)
    const [path, setPath] = useState('/')
    const [form, setForm] = useState({
        email: "",
        user: "",
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
        var passid_len2 = form.password.length;
        if (!form.email.match(formato_email)) {
          alert("Debes ingresar un email electronico valido!");
          focus()
          setValidate(false)//Para la parte dos, que los datos se conserven
        }
        else if(passid_len <= 8){
            alert("Debes ingresar una password con mas de 8 caracteres");
            focus()//Para la parte dos, que los datos se conserven
        }
        else if (passid_len != passid_len2){
            alert("Las constraseñas deben coincidir");
            focus()
        }
        else{
            setValidate(true)//Para la parte dos, que los datos se conserven
            setPath('/signup')
        }
        console.log(validate);
      };

    return (      
        <>
        <NavbarComponent />
        <Container id="main-container">
            <h1 className='text-center mt-3'> Sign Up</h1>
            <div className='login-container'>
                <div className='login-image'>
                    <img src=''/>
                </div>
                <Form id="formSignup">
                    <Form.Group className="mb-6" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" 
                            placeholder="Enter email" 
                            id="email" 
                            name="email" 
                            value={form.email} 
                            onChange={onUpdateField} />
                    </Form.Group>

                    <Form.Group className="mb-6" >
                        <Form.Label>Nombre de usuario</Form.Label>
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

                    <Form.Group className="mb-3" >
                        <Form.Label>Confirmar password</Form.Label>
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
        </Container>
    </>
    );
}

export default SignupComponent