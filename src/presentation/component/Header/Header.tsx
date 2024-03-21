import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar fixed="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">MTG Utils</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#features">Hand Counter</Nav.Link>
          <Nav.Link href="#pricing">Timer</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
