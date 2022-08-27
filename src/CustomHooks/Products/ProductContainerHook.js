import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserWishList } from "./../../Redux/actions/wishListAction";

const ProductContainerHook = () => {
    const [loading, setLoading] = useState(true);
    const [favProducts, setFavProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const get = async () => {
        await dispatch(getLoggedUserWishList());
        setLoading(false);
        };
        get();
    }, []);

    const response = useSelector(
        (state) => state.WishListReducer.loggedUserWidshList
    );
    
    useEffect(() => {
        if (loading === false) {
        if (response.data.length >= 1) {
            setFavProducts(response.data.map((item) => item._id));
        } else {
            setFavProducts([]);
        }
        }
    }, [loading]);


    return [favProducts];
};

export default ProductContainerHook;
