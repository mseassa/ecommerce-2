import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, getProductsLike } from '../../Redux/actions/productsAction';

const ViewProductDetailsHook = (id) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [])

    const productDetails = useSelector((state)=> state.products.productDetails.data)
    
    let item = [];
    if (productDetails) {
        item = productDetails;
    } else {
        item = [];
    }
    useEffect(() => {
        if (item.category) {
        dispatch(getProductsLike(item.category))
        }
    }, [item])
    
    const productsLike = useSelector((state)=> state.products.productsLike.data)

    let productsLikeitems = [];
    if (productsLike) {
        productsLikeitems = productsLike.slice(0, 4);
    } else {
        productsLikeitems = [];
    }


    return [item, productsLikeitems];
    
}

export default ViewProductDetailsHook