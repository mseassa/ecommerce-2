import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllReviewsProduct } from "../../Redux/actions/reviewAction";

const ViewAllReviewsHook = (id) => {
    
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getAllReviewsProduct(id, 1, 5))
        setLoading(false)
    }, [])

    const allReviewsProduct = useSelector(state=> state.ReviewReducer.allReviewProduct)



    const getPage = async (page) => {
        await dispatch(getAllReviewsProduct(id, page, 5))
    }


    
  return [ allReviewsProduct, getPage ];
};

export default ViewAllReviewsHook;
