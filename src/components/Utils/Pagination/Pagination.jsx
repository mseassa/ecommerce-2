import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ pageCount, onPress }) => {
    const handlePageClick = (data) => {
      onPress(data.selected + 1);
    }
  return (
    <>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2} 
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center  p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link text-primary"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link text-primary rounded-0"}
        nextLinkClassName={"page-link text-primary rounded-0"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link text-primary"}
        activeClassName={"active"}
      />
    </>
  )
}

export default Pagination