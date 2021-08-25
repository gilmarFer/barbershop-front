import Ract from 'react';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

export default function CNavbar() {
  return (
    <Navbar id="c-nabvar-main" expand="md" variant="dark">
      <Container id="c-navbar" className="">
        <Navbar.Brand href="/" className="position-static">
          <img id="nav-logo" className="fluid" src={logo} alt="logo" />
          <h6>Barbershop.com</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-collapse">
          <Nav className="ms-auto px-3">
            <Nav.Link className="light" href="#about-main">About Us</Nav.Link>
            <Nav.Link href="#barbers-main">Barbers</Nav.Link>
            <Nav.Link href="#service-main">Services</Nav.Link>
          </Nav>
          <Nav>
            <a to="/sch">
              <Button variant="outline-warning">Book now</Button>

            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
