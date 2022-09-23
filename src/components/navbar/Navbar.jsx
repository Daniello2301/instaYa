import { AiFillHome } from 'react-icons/ai'
import { Container, Nav, Navbar} from 'react-bootstrap';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">  <AiFillHome/> Home </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> Envíos </Nav.Link>
            <Nav.Link href="/HomePage"> Crear Envío </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarComponent;
