import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'

const FormContainer = ({children}) => {
  return (
    <Container>
      <Card>
        <Card.Body>
        <Row className='justify-c
        ontaint-md-center'>
            <Col xs={12} md={12}>
                {children}
            </Col>
        </Row>
        </Card.Body>
        </Card>
    </Container>
  )
}

export default FormContainer