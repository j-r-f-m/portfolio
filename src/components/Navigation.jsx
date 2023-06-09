import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <>
      <Navbar sticky="top" bg="secondary" variant="dark">
        <Nav className="me-auto">
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;
