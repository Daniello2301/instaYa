import { useState } from "react"
import { Form, Button, Alert } from "react-bootstrap";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

import "./Login.css";

import * as API from '../../services/users-services';

function LoginComponent() {
	const [validate, setValidate] = useState(false);
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const onUpdateField = (e) => {
		const nextFormState = {
			...form,
			[e.target.name]: e.target.value,
		};
		setForm(nextFormState);
	};

	const data = {
		email: form.email,
		password: form.password
	}

	const handleSubmit = async(e) => {
		e.preventDefault();
			try {
				await API.login(data)
					.then((response) => {
						cookies.set("TOKEN", response.accessToken,
						{
							path:'/'
						});
						setValidate(true)
						window.location.href = "/HomePage";
					})
					.catch((error) => {
						console.log(error);
						let message = typeof error.response !== "undefined" ? error.response.data.message : error.message;
						if(message.length > 1){
							let msg = JSON.stringify(message);
							alert(msg)
						}else{
							alert(message)
						}
					})
			} catch (error) {
				error = new Error();
				console.log(error);
			}

	};

	return (
		<>
			<div className="container d-grid">
				<h1 className="text-center mt-3">Iniciar Sesion</h1>
				<div className="login-container d-flex align-items-center justify-content-center w-100 my-5">
					<div className="login-image">
						<img src="" />
					</div>
					<Form style={{ width: 450 + "px" }} onSubmit={(e) => handleSubmit(e)}>
						<Form.Group className="mb-3">
							<Form.Label>Correo electronico</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								id="email"
								name="email"
								value={form.email}
								onChange={onUpdateField}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								id="password"
								name="password"
								value={form.password}
								onChange={onUpdateField}
							/> 
						</Form.Group>
						<Button variant="primary" type='submit'	 onClick={(e) => handleSubmit(e)}>
							Inisiar Sesion
						</Button>
						{validate ? (
							<p className="text-success">You Are Logged in Successfully</p>
							) : (
							<p className="text-danger">You Are Not Logged in</p>
						)}
					</Form>
				</div>
			</div>
		</>
	);
}

export default LoginComponent;
