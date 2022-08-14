import React from 'react'
import { SubTitle, AdminEditProduct } from '../../components'

const AdminEditProductPage = ({title}) => {
  return (
    <>
    <SubTitle title={title} />
    <AdminEditProduct />
    </>
  )
}

export default AdminEditProductPage