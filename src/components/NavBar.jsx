import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Resina en la Web</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Lapiceras Personalizadas">Lapiceras Personalizadas</Nav.Link>
            <Nav.Link href="#Dijes">Dijes</Nav.Link>
            <Nav.Link href="#Aros">Aros</Nav.Link>
            <Nav.Link href="#Pulseras">Pulseras</Nav.Link>
            <Nav.Link href="#Anillos">Anillos</Nav.Link>
            <Nav.Link href="#Posavasos">Posavasos</Nav.Link>
            <Nav.Link href="#Señaladores de libros">Señaladores de libros</Nav.Link>
            <Nav.Link href="#Llaveros">Llaveros</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}
export default ColorSchemesExample;