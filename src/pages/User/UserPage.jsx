import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Usernavbar } from '../../components';

const UserPage = () => {
  return (
    <>
<div>
      <Container fluid style={{minHeight: '670px'}}>
        <Row>
          <Col lg='3'>
            <Usernavbar />
          </Col>
          <Col lg='9'>
            <Outlet />
          </Col>
        </Row>
      </Container>
</div>
    </>
  )
}

export default UserPage