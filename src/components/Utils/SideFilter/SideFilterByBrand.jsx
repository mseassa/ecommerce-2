import React from "react";
import { Row } from "react-bootstrap";

const SideFilterByBrand = ({ vendor, clickBrand }) => {
    return (
        <>
        <Row>
            <h5 className="section-title position-relative text-uppercase mb-3">
            <span className=" pr-3">Filter by Brand</span>
            </h5>
            <div className="bg-white p-4 mb-30">
            <form>

                {
                    vendor.length > 0 ? (<div className="d-flex justify-content-between align-items-center">
                    <label
                        className="custom-checkbox"
                    >
                        <input onChange={clickBrand} type="checkbox" value='0'/>
                        <span className="checkmark me-2"></span>
                        <span className="label">All Brands</span>
                    </label>
                    <div>
                        <span className="badge border rounded-0 text-dark">1000</span>
                    </div>
                    </div>) : ('')
                }

                {
                    vendor ? (vendor.map((item)=>
                    <div key={item._id} className="d-flex justify-content-between align-items-center">
                <label
                    className="custom-checkbox"
                >
                    <input onChange={clickBrand} type="checkbox" value={item._id}/>
                    <span className="checkmark me-2"></span>
                    <span className="label">{item.name}</span>
                </label>
                <div>
                    <span className="badge border rounded-0 text-dark">249</span>
                </div>
                </div>
                )) : (<h6>No Categories</h6>)
                }

            </form>
            </div>
        </Row>
        </>
    );
};

export default SideFilterByBrand;
