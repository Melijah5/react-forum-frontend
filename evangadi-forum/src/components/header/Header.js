import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import EvangadiBrand from '../../asset/image/10001.png'
import './Header.css'


const Header = () => {
  return (
    
    <header>
        <Navbar bg="white" variant ='light' expand="lg" className='p-2'>
      <Container>
        <Navbar.Brand href="#home"><img src={EvangadiBrand} alt='brand'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">How it Works</Nav.Link>
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}

export default Header