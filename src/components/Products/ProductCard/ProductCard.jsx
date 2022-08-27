import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";
import {
  addToWishList,
  deleteFromWishList,
} from "./../../../Redux/actions/wishListAction";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../../../CustomHooks/Utils/useNotification";
import { ToastContainer } from "react-toastify";
import ProductCardHook from "../../../CustomHooks/Products/ProductCardHook";

const ProductCard = ({ product, favProducts }) => {

  const [ handleFav, favIconColor, ] = ProductCardHook(product, favProducts)
  
  return (
    <>
      {/* Products Start */}
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src={product.imageCover} alt={product.title} />
            <div className="product-action">
              <Link className="btn btn-outline-dark btn-square rounded-0" to="">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
              <Link
                onClick={handleFav}
                className={`btn btn-outline-dark btn-square rounded-0 ${favIconColor.bg}`}
                to=""
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`${favIconColor.color}`}
                />
              </Link>
            </div>
          </div>
          <div className="text-center py-4">
            <Link
              className="h6 text-decoration-none text-truncate text-dark"
              to={`/products/${product._id}`}
            >
              {product.title}
            </Link>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>${product.price}</h5>
              <h6 className="text-muted ms-2">
                <del>$123.00</del>
              </h6>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <div className="me-2">
                {product.ratingsAverage > 0 ? (
                  <ReactStars
                    edit={false}
                    count={5}
                    size={12}
                    color={"#FFD333"}
                    activeColor={"#FFD333"}
                    value={product.ratingsAverage}
                    a11y={true}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    filledIcon={<i className="fa fa-star" />}
                  />
                ) : (
                  ""
                )}
              </div>
              <div>
                {product.ratingsQuantity > 0 ? (
                  <small>({product.ratingsQuantity})</small>
                ) : (
                  <small>No Reviews</small>
                )}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      {/* Products End */}
    </>
  );
};

export default ProductCard;
