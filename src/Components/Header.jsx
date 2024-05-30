import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Sudeep S</Navbar.Brand>
          <Nav className="me-auto" style={{marginLeft:"600px"}}>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="resume">Resume</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Dropdown>
      <Dropdown.Toggle variant="white" id="dropdown-basic" style={{marginTop:'2px'}}>
        Contact
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="mailto:ssudeep606@gmail.com">Email</Dropdown.Item>
        <Dropdown.Item href="callto:8921743836">Call</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
