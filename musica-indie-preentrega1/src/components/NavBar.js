import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWigdet from './CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#inicio">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#carrito">Carrito</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#logearse">Logearse</Nav.Link>
            <Nav.Link href="#registrarse">Registrarse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {CartWigdet()}
    </>
  );
}

export default NavBar;