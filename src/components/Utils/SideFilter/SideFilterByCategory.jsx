import React from "react";
import { Row } from "react-bootstrap";

const SideFilterByCategory = ({ category, clickCategory }) => {
    return (
        <>
        <Row>
            <h5 className="section-title position-relative text-uppercase mb-3">
            <span className=" pr-3">Filter by Category</span>
            </h5>
            <div className="bg-white p-4 mb-30">
            <form>
                {category.length > 0 ? (
                <div className="d-flex justify-content-between align-items-center">
                    <label className="custom-checkbox">
                    <input onChange={clickCategory} type="checkbox" value="0" />
                    <span className="checkmark me-2"></span>
                    <span className="label">All Cartegories</span>
                    </label>
                    <div>
                    <span className="badge border rounded-0 text-dark">1000</span>
                    </div>
                </div>
                ) : (
                ""
                )}

                {category ? (
                category.map((item) => (
                    <div
                    key={item._id}
                    className="d-flex justify-content-between align-items-center"
                    >
                    <label className="custom-checkbox">
                        <input onChange={clickCategory} type="checkbox" value={item._id} />
                        <span className="checkmark me-2"></span>
                        <span className="label">{item.name}</span>
                    </label>
                    <div>
                        <span className="badge border rounded-0 text-dark">
                        249
                        </span>
                    </div>
                    </div>
                ))
                ) : (
                <h6>No Categories</h6>
                )}
                {/* 
                    <div className="d-flex justify-content-between align-items-center">
                    <label
                        className="custom-checkbox"
                    >
                        <input type="checkbox" />
                        <span className="checkmark me-2"></span>
                        <span className="label">Women Clothes</span>
                    </label>
                    <div>
                        <span className="badge border rounded-0 text-dark">249</span>
                    </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                    <label
                        className="custom-checkbox"
                    >
                        <input type="checkbox" />
                        <span className="checkmark me-2"></span>
                        <span className="label">lap Top</span>
                    </label>
                    <div>
                        <span className="badge border rounded-0 text-dark">200</span>
                    </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                    <label
                        className="custom-checkbox"
                    >
                        <input type="checkbox" />
                        <span className="checkmark me-2"></span>
                        <span className="label">Mobile</span>
                    </label>
                    <div>
                        <span className="badge border rounded-0 text-dark">149</span>
                    </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                    <label
                        className="custom-checkbox"
                    >
                        <input type="checkbox" />
                        <span className="checkmark me-2"></span>
                        <span className="label">Shoes</span>
                    </label>
                    <div>
                        <span className="badge border rounded-0 text-dark">180</span>
                    </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                    <label
                        className="custom-checkbox"
                    >
                        <input type="checkbox" />
                        <span className="checkmark me-2"></span>
                        <span className="label">Smart Watches</span>
                    </label>
                    <div>
                        <span className="badge border rounded-0 text-dark">200</span>
                    </div>
                    </div> */}
            </form>
            </div>
        </Row>
        </>
    );
};

export default SideFilterByCategory;
