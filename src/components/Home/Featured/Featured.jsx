import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faShippingFast,
    faExchange,
    faPhoneVolume
  } from "@fortawesome/free-solid-svg-icons";


const Featured = () => {
return (
    <>
    {/* Featured Start */}
    <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
            className="d-flex align-items-center bg-white mb-4"
            style={{padding: '30px'}}
            >
            <h1 className="text-primary m-0 me-3"><FontAwesomeIcon icon={faCheck} /></h1>
            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
            className="d-flex align-items-center bg-white mb-4"
            style={{padding: '30px'}}
            >
            <h1 className="text-primary m-0 me-3"><FontAwesomeIcon icon={faShippingFast} /></h1>
            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
            className="d-flex align-items-center bg-white mb-4"
            style={{padding: '30px'}}
            >
            <h1 className="text-primary m-0 me-3"><FontAwesomeIcon icon={faExchange} /></h1>
            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
            className="d-flex align-items-center bg-white mb-4"
            style={{padding: '30px'}}
            >
            <h1 className="text-primary m-0 me-3"><FontAwesomeIcon icon={faPhoneVolume} /></h1>
            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
        </div>
        </div>
    </div>
    {/* Featured End */}
    </>
);
};

export default Featured;
