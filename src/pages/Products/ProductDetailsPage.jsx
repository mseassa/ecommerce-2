import React from "react";
import {
    CategoryHeader,
    ProductCardContainer,
    ProductDetails,
    ReviewsContainer,
} from "../../components";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../CustomHooks/Products/ViewProductDetailsHook";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [item, productsLikeitems] = ViewProductDetailsHook(id)
    
    return (
        <>
        <CategoryHeader />
        <ProductDetails />
        <ReviewsContainer />
        <ProductCardContainer products={productsLikeitems} title="You may also like" />
        </>
    );
};

export default ProductDetailsPage;
