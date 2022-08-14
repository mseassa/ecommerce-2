import React from 'react'
import { SubTitle, AdminAddCategory } from '../../components'

const AdminAddCategoryPage = ({ title }) => {
  return (
    <>
    <SubTitle title={title} />
    <AdminAddCategory />
    </>
  )
}

export default AdminAddCategoryPage