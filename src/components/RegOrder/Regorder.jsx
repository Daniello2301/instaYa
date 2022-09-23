import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarComponent from "../navbar/Navbar";
import { useState } from "react";
import "./regorders.css";

const Regorder = () => {
  const [todo, setTodo] = useState({
    todoDate: "",
    todoTime: "",
    todoLong: "",
    todoWidth: "",
    todoHeight: "",
    todoWeight: "",
    todoCity: "",
    todoAdress: "",
    todoId: "",
    todoName: "",
    todoEmail: "",
    todoCityD: "",
    todoAdressD: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <NavbarComponent />
      <Container id="main-container" className="d-grid">
        <div className="col border rounded  px-5 py-2 my-5">
          <form id="reg-in-order" onSubmit={handleSubmit} className="py-3 text-center align-items-center">
            <div className="py-3">
              <h1 style={{Color:"red"}} >Registro de Ordenes</h1>
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
                  placeholder="Largo"
                  type="text"
                  className="form-control mb-3"
                  onChange={handleChange}
                  value={todo.todoLong}
                />
              </div>
              <div className="col">
                <input
                  name="todoWidth"
                  placeholder="Ancho"
                  type="text"
                  className="form-control mb-3"
                  onChange={handleChange}
                  value={todo.todoWidth}
                />
              </div>
              <div className="col">
                <input
                  name="todoHeight"
                  placeholder="Alto"
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
                  name="todoAdress"
                  placeholder="Direccion de Regogida"
                  type="text"
                  className="form-control mb-3"
                  onChange={handleChange}
                  value={todo.todoAdress}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  name="todoId"
                  placeholder="Cedula Cliente"
                  type="text"
                  className="form-control mb-3"
                  onChange={handleChange}
                  value={todo.todoId}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  name="todoName"
                  placeholder="Nombre Completo Cliente"
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
                  name="todoAdressD"
                  placeholder="Direccion de Destino"
                  type="text"
                  className="form-control mb-3"
                  onChange={handleChange}
                  value={todo.todoAdressD}
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Crear Orden
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};
export default Regorder;
