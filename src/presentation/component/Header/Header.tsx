import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routerStrings } from "../../../generic/globalStrings";
import "./Header.css";

export const Header = () => {
  return (
    <Navbar
      fixed="top"
      bg="dark"
      data-bs-theme="dark"
      className="headerContainer"
    >
      <Container>
        <Navbar.Brand as={Link} to={routerStrings.root}>
          MTG - Utils
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={routerStrings.root}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={routerStrings.timer}>
            Timer
          </Nav.Link>
          <Nav.Link as={Link} to={routerStrings.contact}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
