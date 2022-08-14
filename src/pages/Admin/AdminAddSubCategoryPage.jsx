import React from 'react'
import { SubTitle, AdminAddsubCategory } from '../../components'

const AdminAddSubCategoryPage = ({ title }) => {
  return (
    <>
    <SubTitle title={title} />
    <AdminAddsubCategory />
    </>
  )
}

export default AdminAddSubCategoryPage