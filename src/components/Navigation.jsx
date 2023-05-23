import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function Navigation() {
  return (
    <>
      <Navbar sticky="top" bg="secondary" variant="dark">
        <Nav className="me-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Projects</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;
