import React from "react";
import { Col } from "react-bootstrap";

const CartCheckout = () => {
    return (
        <>
        <Col md="4">
            <form className="mb-30" action="">
            <div className="input-group">
                <input
                type="text"
                className="form-control border-0 rounded-0"
                placeholder="Coupon Code"
                />
                <div className="input-group-append">
                <button className="btn btn-primary rounded-0">
                    Apply Coupon
                </button>
                </div>
            </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
            <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                <h6>Subtotal</h6>
                <h6>$150</h6>
                </div>
                <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$10</h6>
                </div>
            </div>
            <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                <h5>Total</h5>
                <h5>$160</h5>
                </div>
                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3 rounded-0">
                Proceed To Checkout
                </button>
            </div>
            </div>
        </Col>
        </>
    );
};

export default CartCheckout;
