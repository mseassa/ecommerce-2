import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "../../constants/images";

const CategoryCard = ({ title, img }) => {
    return (
        <>
        <Col
        xl='3'
        lg='4'
        sm='6'
        className="pb-1">
            <Link className="text-decoration-none text-dark" to="">
            <div className="cat-item d-flex align-items-center mb-4">
                <div
                className="overflow-hidden"
                style={{ width: "200px"}}
                >
                <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="flex-fill ps-3">
                <h6>{title}</h6>
                <small className="text-body">100 Products</small>
                </div>
            </div>
            </Link>
        </Col>
        </>
    );
};

export default CategoryCard;
