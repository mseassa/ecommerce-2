import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const CategoryHeader = () => {
  return (
    <>
<Container fluid>
      <Navbar className='mb-3' bg="white" variant="light">
        <Nav className="me-auto">
          <Nav.Link className='text-dark' href="#home">All</Nav.Link>
          <Nav.Link href="#features">Cameras</Nav.Link>
          <Nav.Link href="#pricing">Clothes</Nav.Link>
          <Nav.Link href="#pricing">More</Nav.Link>
        </Nav>
      </Navbar>
</Container>
</>
  )
}

export default CategoryHeader