import React from 'react'
import { AdminOrderDetails, SubTitle, AdminClientDetails } from '../../components'
import { Row } from 'react-bootstrap';

const AdminOrderDetailsPage = ({title}) => {
  return (
    <>
    <SubTitle title={title} />
    <Row>
    <AdminOrderDetails />
    <AdminClientDetails />
    </Row>
    </>
  )
}

export default AdminOrderDetailsPage