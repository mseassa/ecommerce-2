import React from 'react'
import { SubTitle, AdminManageProducts, Pagination } from '../../components'
import ViewPoductsAdminHook from '../../CustomHooks/Admin/ViewPoductsAdminHook'
import { getAllProductsWithPage } from '../../Redux/actions/productsAction'

const AdminManageProductsPage = ({ title }) => {
  const [products, pagination, getPage] = ViewPoductsAdminHook()

  var pageCount = 0
  if(pagination)
  pageCount = pagination.numberOfPages;

  return (
    <>
    <SubTitle title={title} />
    <AdminManageProducts products={products} />
    {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPage} />
        ) : (
          ""
        )}

    </>
  )
}

export default AdminManageProductsPage