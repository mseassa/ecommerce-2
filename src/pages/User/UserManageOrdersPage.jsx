import React from 'react'
import { SubTitle, UserAllOrders } from '../../components'
import Pagination from './../../components/Utils/Pagination/Pagination';

const UserManageOrdersPage = ({ title }) => {
  return (
    <>
    <SubTitle title={title} />
    <UserAllOrders />
    <Pagination />
    </>
  )
}

export default UserManageOrdersPage