import React from 'react'
import { SubTitle, AdminManageOrders, Pagination } from '../../components'

const AdminManageOrdersPage = ({ title }) => {
  return (
    <>
    <div style={{minHeight: '670px', position: 'relative'}}>
    <SubTitle title={title} />
    <AdminManageOrders />
    <Pagination />
    </div>
    </>
  )
}

export default AdminManageOrdersPage