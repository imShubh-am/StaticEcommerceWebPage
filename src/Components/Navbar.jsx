import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Placeholder for Cart icon (replace with your actual Cart icon)
const CartIcon = () => (
  <span style={{ fontSize: '1.5em', marginRight: '10px', marginLeft:'10px' }}>
    🛒
  </span>
);

// Placeholder for Login link (replace with your actual Login link or component)
const LoginLink = () => (
  <Nav.Link href="#login">Login</Nav.Link>
);

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-lg sticky-top">
      <Container fluid>
        <Navbar.Brand href="#">JEEVAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/products">Mens</NavDropdown.Item>
              <NavDropdown.Item href="/products">Womens</NavDropdown.Item>
              <NavDropdown.Item href="/products">Kids</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            {/* Cart Icon (replace with your actual Cart icon) */}
            <CartIcon />
            {/* Login Link (replace with your actual Login link or component) */}
            <LoginLink />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
