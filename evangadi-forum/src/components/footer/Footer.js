import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EvangadiBrand from '../../asset/image/10002.png'

const Footer = () => {
  return (
    <>
      <Row className='py-3'>
        <Navbar bg="dark" variant='dark' expand="lg" className='p-2'>
          <Col>
            <Navbar.Brand href="#home"><img src={EvangadiBrand} alt='brand' /></Navbar.Brand>
            <div className='p-2'><i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram px-4"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
            </Col>
          <Col >
              <h5>Useful Link</h5>
            <Nav.Link href="#home">How it Works</Nav.Link>
            <Nav.Link href="#link">Terms of Service</Nav.Link>
            <Nav.Link href="#link">Privacy policy</Nav.Link></Col>
          <Col>
          <h5>Contact Info</h5>
          <Nav.Link href="#link">Evangadi Networks</Nav.Link>
            <Nav.Link href="#link">suppor@evangadi.com</Nav.Link>
            <Nav.Link href="#link">+555-555-555</Nav.Link>
           
          </Col>
        </Navbar>
      </Row>
    </>
  )
}

export default Footer