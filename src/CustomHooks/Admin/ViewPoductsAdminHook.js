import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsWithPage } from "../../Redux/actions/productsAction";

const ViewPoductsAdminHook = () => {
    const dispatch = useDispatch();

        // When Pressing Pagination
        const getPage = (page) => {
            dispatch(getAllProductsWithPage(page, 12))
          }

    useEffect(() => {
        dispatch(getAllProducts(12));
    }, []);

    const allProducts = useSelector((state) => state.products.allProducts);

    let products = [];
    if (allProducts) {
        products = allProducts.data;
    } else {
        products = [];
    }

    let pagination = [];
    if (allProducts.paginationResult) {
        pagination = allProducts.paginationResult;
    } else {
        pagination = 0;
    }

    return [products, pagination, getPage];
};

export default ViewPoductsAdminHook;
