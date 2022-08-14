import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import {
  faHeart,
  faShoppingCart,
  faSyncAlt,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
    return (
        <>
        {/* Products Start */}
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
            <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={product.imageCover} alt="" />
                <div className="product-action">
                <Link className="btn btn-outline-dark btn-square rounded-0" to="">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
                <Link className="btn btn-outline-dark btn-square rounded-0" to="">
                    <FontAwesomeIcon icon={faHeart} />
                </Link>
                <Link className="btn btn-outline-dark btn-square rounded-0" to="">
                    <FontAwesomeIcon icon={faSyncAlt} />
                </Link>
                <Link className="btn btn-outline-dark btn-square rounded-0" to="">
                    <FontAwesomeIcon icon={faSearch} />
                </Link>
                </div>
            </div>
            <div className="text-center py-4">
                <Link className="h6 text-decoration-none text-truncate text-dark" to={`/products/${product._id}`}>
                {product.title}
                </Link>
                <div className="d-flex align-items-center justify-content-center mt-2">
                <h5>${product.price}</h5>
                <h6 className="text-muted ms-2">
                    <del>$123.00</del>
                </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                <FontAwesomeIcon className="text-primary me-1" icon={faStar} />
                <FontAwesomeIcon className="text-primary me-1" icon={faStar} />
                <FontAwesomeIcon className="text-primary me-1" icon={faStar} />
                <FontAwesomeIcon className="text-primary me-1" icon={faStar} />
                <FontAwesomeIcon className="text-primary me-1" icon={faStar} />

                <small>(99)</small>
                </div>
            </div>
            </div>
        </div>
        {/* Products End */}
        </>
    );
};

export default ProductCard;
