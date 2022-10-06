import { AiFillHome } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';

import './Navbar.css'

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="nav">
          <NavLink className="navbar-brand" to={"/HomePage"} > <AiFillHome/> Home</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-options">
              <NavLink className="nav-link" to={"/"} > Dashboard </NavLink>
              <NavLink className="nav-link" to={"/Sends"} > Envíos </NavLink>
              <NavLink className="nav-link" to={"/NewSend"} > Crear Envio </NavLink>
<<<<<<< HEAD
=======
              <NavLink className="nav-link disabled"  to={"/"} > Dashboard </NavLink>
>>>>>>> 549bdaa7ed5517df76e41833b4383bf1d72f0899
            </Nav>
          </Navbar.Collapse>
          <Button className='btn-login' variant="light" href="/Login" >Log In</Button>
        </Container>
    </Navbar>
    </>
  );
}

export default NavbarComponent;
