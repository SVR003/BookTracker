import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <div
    style={{background: 'linear-gradient(to right, #030202, #91221E, #030202, #030202)',  color: 'white'}}
      className="py-4"
    >
      <Container>
        <Row className="justify-content-between">
          {/* Intro  */}
          <Col md={4} className="mb-4">
            <h4>
            <i class="fa-solid fa-book-open-reader"></i> BookTracker
            </h4>
            <p>
            Book Tracker is a simple web application for managing your personal book collection. You can add, edit, delete, and sort books, as well as search through them by title, author, or genre.
            </p>
            <p>Code licensed by SVR.</p>
            <p>Currently v1.0.0.1</p>
          </Col>

          {/* Links  */}
          <Col md={2} className="mb-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/books" style={{ textDecoration: 'none', color: 'white' }}>
                  Book List
                </Link>
              </li>
              <li>
                <Link to="/add" style={{ textDecoration: 'none', color: 'white' }}>
                  Add New Book
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact  */}
          <Col md={3} className="mb-4">
            <h5>Contact Us</h5>
            <p>Email: support@booktracker.com</p>
            <p>Phone: +1 (343) 321-7654</p>
            <p>Location: Cuba, TIW - Hawaii</p>
          </Col>

          {/* Connection  */}
          <Col md={3} className="mb-4">
            <h5>Let's Get Connected!</h5>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email here..."
                className="me-2"
              />
              <Button variant="dark">
                <i className="fa-solid fa-arrow-right text-warning"></i>
              </Button>
            </Form>
            <div className="d-flex justify-content-between mt-3">
              <a
                href="https://www.twitter.com"
                style={{ textDecoration: 'none', color: 'white' }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com"
                style={{ textDecoration: 'none', color: 'white' }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com"
                style={{ textDecoration: 'none', color: 'white' }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                style={{ textDecoration: 'none', color: 'white' }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.github.com"
                style={{ textDecoration: 'none', color: 'white' }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.whatsapp.com"
                style={{ textDecoration: 'none', color: 'white' }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-2">
            <p>Copyright &copy; 2025, BookTracker. All Rights Reserved -- SVR.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer