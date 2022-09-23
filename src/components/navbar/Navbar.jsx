import { AiFillHome } from 'react-icons/ai'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';

import './Navbar.css'
=======
import { Container, Nav, Navbar} from 'react-bootstrap';
>>>>>>> cb470bc2f0170b2102236194661461b2e1482a20

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="nav">
          <Navbar.Brand href="#home">  <AiFillHome/> Home </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-options">
              <NavLink className="nav-link" to={"/Sends"} > Envíos </NavLink>
              <NavLink className="nav-link" to={"/"} > Crear Envio </NavLink>
              <NavLink className="nav-link" to={"/"} > Dashboard </NavLink>
            </Nav>
          </Navbar.Collapse>
          <Button className='btn-login' variant="light" href="/Login" >Log In</Button>
        </Container>
    </Navbar>
    </>
  );
}

export default NavbarComponent;
