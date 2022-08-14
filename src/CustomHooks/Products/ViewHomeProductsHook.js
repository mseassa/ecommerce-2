import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions/productsAction";

const ViewHomeProductsHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const allProducts = useSelector((state) => state.products.allProducts.data);

    let products = [];
    if (allProducts) {
        products = allProducts.slice(0, 4);
    } else {
        products = [];
    }

    return [products];
};

export default ViewHomeProductsHook;
