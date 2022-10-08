import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import NavbarComponent from "../navbar/Navbar";
import { useState } from "react";
import "./regorders.css";
import axios from "axios";

const Regorder = () => {
	const url = Global.url;
	const [todo, setTodo] = useState({
		todoDate: "",
		todoDesc: "",
		todoTime: "",
		todoLong: "",
		todoWidth: "",
		todoHeight: "",
		todoWeight: "",
		todoCity: "",
		todoAddress: "",
		todoIdentification: "",
		todoName: "",
		todoLastName: "",
		todoEmail: "",
		todoIdentificationD: "",
		todoNameD: "",
		todoLastNameD: "",
		todoCityD: "",
		todoAddressD: "",
	});

	function addRegOrder(e) {
		e.preventDefault();
		var regorder = todo;
		console.log(todo);
		axios
			.post(url + "order/create", todo)
			.then((res) => {
				alert(res.data);
			})
			.then((err) => {
				console.log(err);
			});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setTodo({
			...todo,
			[e.target.name]: e.target.value,
		});
	};
	// const submitForm = () => {
	// 	var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
	// 	var passid_len = form.password.length;
	// 	var passid_len2 = form.passwordConf.length;
	// 	var username_len = form.username.length;
	// 	if (!form.email.match(formato_email)) {
	// 		alert("Debes ingresar un email electronico valido!");
	// 		focus();
	// 		setValidate(false);
	// 	} else if (username_len <= 8) {
	// 		alert(
	// 			"Debes ingresar un nombre de usuario con mas de 8 caracteres"
	// 		);
	// 		focus();
	// 	} else if (passid_len <= 8) {
	// 		alert("Debes ingresar una password con mas de 8 caracteres");
	// 		focus();
	// 	} else if (passid_len != passid_len2) {
	// 		alert("Las constraseñas deben coincidir");
	// 		focus();
	// 	} else {
	// 		setValidate(true);
	// 		setPath("/signup");
	// 	}
	// 	console.log(validate);
	// };
	return (
		<>
			<NavbarComponent />
			<Container id="main-container" className="d-grid">
				<Row className="form-container border rounded  px-5 py-2 my-5">
					<form
						id="reg-in-order"
						onSubmit={addRegOrder}
						className="py-3 text-center align-items-center"
						method="POST">
						<div className="py-3">
							<h1 className="form-titulo">Registro de Ordenes</h1>
						</div>
						<div className="row">
							<div className="col">
								<input
									name="todoDate"
									placeholder="Ingrese la Fecha de Recogida"
									type="date"
									className="form-control mb-3"
									onChange={handleChange}
									value={todo.todoDate}
								/>
							</div>
							<div className="col">
								<input
									name="todoTime"
									placeholder="Ingrese la Hora de Recogida"
									type="time"
									className="form-control mb-3"
									onChange={handleChange}
									value={todo.todoTime}
								/>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<input
									name="todoLong"
									placeholder="Largo (cm)"
									type="text"
									className="form-control mb-3"
									onChange={handleChange}
									value={todo.todoLong}
								/>
							</div>
							<div className="col">
								<input
									name="todoWidth"
									placeholder="Ancho (cm)"
									type="text"
									className="form-control mb-3"
									onChange={handleChange}
									value={todo.todoWidth}
								/>
							</div>
							<div className="col">
								<input
									name="todoHeight"
									placeholder="Alto (cm)"
									type="text"
									className="form-control mb-3"
									onChange={handleChange}
									value={todo.todoHeight}
								/>
							</div>
							<div className="col">
								<input
									name="todoWeight"
									placeholder="Peso(lb)"
									type="text"
									className="form-control mb-3"
									onChange={handleChange}
									value={todo.todoWeight}
								/>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="row">
									<div className="col">
										<input
											name="todoIdentification"
											placeholder="Cedula Cliente"
											type="text"
											className="form-control mb-3"
											onChange={handleChange}
											value={todo.todoIdentification}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<input
											name="todoName"
											placeholder="Nombre Cliente"
											type="text"
											className="form-control mb-3"
											onChange={handleChange}
											value={todo.todoName}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<input
											name="todoLastName"
											placeholder="Apellido Cliente"
											type="text"
											className="form-control mb-3"
											onChange={handleChange}
											value={todo.todoLastName}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<input
											name="todoEmail"
											placeholder="Correo Cliente"
											type="Email"
											className="form-control mb-3"
											onChange={handleChange}
											value={todo.todoEmail}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<input
											name="todoCity"
											placeholder="Ciudad de Regogida"
											type="text"
											className="form-control mb-3"
											onChange={handleChange}
											value={todo.todoCity}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<input
											name="todoAddress"
											placeholder="Direccion de Regogida"
											type="text"
											className="form-control mb-3"
											onChange={handleChange}
											value={todo.todoAddress}
										/>
									</div>
								</div>
							</div>
							<div className="col" id="lineaVertical">
								<div className="row">
									<div className="col">
										<input
											name="todoIdentificationD"
											placeholder="Cedula Destinatario"
											type="text"
											className="form-control mb-3"
											onChange={handleChange}
											value={todo.todoIdentificationD}
										/>
									</div>
								</div>

								<div className="row">
									<div className="col">
										<input
											name="todoNameD"
											placeholder="Nombre Destinatario"
											type="text"
											className="form-control mb-3"
											onChange={handleChange}
											value={todo.todoNameD}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<input
											name="todoLastNameD"
											placeholder="Apellido Destinatario"
											type="text"
											className="form-control mb-3"
											onChange={handleChange}
											value={todo.todoLastNameD}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<input
											name="todoCityD"
											placeholder="Ciudad de Destino"
											type="text"
											className="form-control mb-3"
											onChange={handleChange}
											value={todo.todoCityD}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<input
											name="todoAddressD"
											placeholder="Direccion de Destino"
											type="text"
											className="form-control mb-3"
											onChange={handleChange}
											value={todo.todoAddressD}
										/>
									</div>
								</div>
							</div>
							<div className="row"> </div>
							<div className="row">
								<div className="col">
									<input
										name="todoDesc"
										placeholder="Descripcion del Paquete enviado"
										type="text"
										className="form-control mb-3"
										onChange={handleChange}
										value={todo.todoDesc}
									/>
								</div>
							</div>
						</div>

						<button className="btn btn-primary" type="submit">
							Crear Orden
						</button>
					</form>
				</Row>
			</Container>
		</>
	);
};
export default Regorder;
