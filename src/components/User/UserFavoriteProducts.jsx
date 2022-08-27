import React, { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import ProductCard from './../Products/ProductCard/ProductCard';
import ProductCardContainer from './../Products/ProductCardContainer/ProductCardContainer';
import { getLoggedUserWishList } from './../../Redux/actions/wishListAction';

const UserFavoriteProducts = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const get = async()=> {
            await dispatch(getLoggedUserWishList())
        }
        get()
        setLoading(false)
    }, [])

    const response = useSelector(state=> state.WishListReducer.loggedUserWidshList)

    useEffect(() => {
        if (loading === false) {
            console.log(response.data);
            setProducts(response.data)
        }
    }, [response])
    
    
  return (
    <>
      <Row className="justify-content-center">
      <ProductCardContainer products={products} />
      </Row>
    </>
  );
};

export default UserFavoriteProducts;
