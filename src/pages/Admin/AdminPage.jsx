import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { AdminNavbar } from '../../components';

const AdminPage = () => {
  return (
    <>
<div>
      <Container fluid style={{minHeight: '670px'}}>
        <Row>
          <Col lg='3'>
            <AdminNavbar />
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

export default AdminPage