import React from 'react'
import { SubTitle, AdminAddVendor } from '../../components'

const AdminAddVendorPage = ({ title }) => {
  return (
    <>
    <SubTitle title={title} />
    <AdminAddVendor />
    </>
  )
}

export default AdminAddVendorPage