import React from "react";
import { Row, Col } from "react-bootstrap";

const ChoosePayment = () => {
    return (
        <>

        <Row>
            <h5 class="section-title position-relative text-uppercase mb-3">
            <span class=" pr-3">Payment</span>
            </h5>
            <div class="bg-white p-4 mb-30">
            <form>
                
                <label class="custom-checkbox-radio">
                    <input type="radio" name="payment" />
                    <span class="checkmark me-2"></span>
                    <span class="label">Paypal</span>
                </label>

                
                <label class="custom-checkbox-radio">
                    <input type="radio" name="payment" />
                    <span class="checkmark me-2"></span>
                    <span class="label">Credit card</span>
                </label>

                
                <label class="custom-checkbox-radio">
                    <input type="radio" name="payment" />
                    <span class="checkmark me-2"></span>
                    <span class="label">Cash On delivery</span>
                </label>
                <div className='text-end'>
                    <button class="btn btn-primary font-weight-bold py-2">Place Order</button>
                </div>
            </form>
            </div>
        </Row>
        </>
    );
};

export default ChoosePayment;
