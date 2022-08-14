import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllCategoryPage } from '../../Redux/actions/categoryAction';

const AllCategoryPageHook = () => {

    const dispatch = useDispatch();

    // When First Load of Category Page
    useEffect(() => {
        dispatch(getAllCategory(12));
    }, []);
  
    const category = useSelector((state) => state.allCategory.category.data);
    const pagination = useSelector((state) => state.allCategory.category.paginationResult);
    const loading = useSelector((state) => state.allCategory.loading);
  
    // to get Page Count
    let pageCount = 0
    if(pagination)
    pageCount = pagination.numberOfPages;
  
  // When Pressing Pagination
    const getPage = (page) => {
      dispatch(getAllCategoryPage(page))
    }

    return [category, loading, pageCount, getPage]

}

export default AllCategoryPageHook