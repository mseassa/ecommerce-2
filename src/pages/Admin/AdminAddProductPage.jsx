import React from 'react'
import { SubTitle, AdminAddProduct } from '../../components'

const AdminAddProductPage = ({title}) => {
  return (
    <>
    <SubTitle title={title} />
    <AdminAddProduct />
    </>
  )
}

export default AdminAddProductPage