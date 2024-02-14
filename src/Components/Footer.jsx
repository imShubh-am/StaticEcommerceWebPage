import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
          <Col md={6}>
            <h5>Follow Us</h5>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-center">© 2024 <a href="https://www.instagram.com/s.h.u.b.h.a.m.2.0/">Shubham Tripathi</a>. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
