import React from 'react'
import { Col, Row } from 'react-bootstrap'
import images from '../../constants/images'

const UserAllOrderCard = () => {
  return (
    <>
<Row className='align-items-center'>
            <div className='d-flex align-items-center justify-content-evenly py-3 bg-dark text-light text-center mb-3'>
                <h5>Order # <span className='text-primary'>256</span></h5>
                <h6>Order Status: <span className='text-primary'>dispatched</span></h6>
            </div>
            <Col lg="9">
            <div className="table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody className="align-middle">
                <tr>
                    <td className="align-middle">
                    <img src={images.product1} alt="" style={{ width: "50px" }} />{" "}
                    Product Name
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                    <div
                        className="input-group quantity mx-auto"
                        style={{ width: "100px" }}
                    >
                        <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus rounded-0">
                            <i className="fa fa-minus"></i>
                        </button>
                        </div>
                        <input
                        type="text"
                        className="form-control form-control-sm bg-secondary border-0 rounded-0 text-center"
                        value="1"
                        />
                        <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus rounded-0">
                            <i className="fa fa-plus"></i>
                        </button>
                        </div>
                    </div>
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                    <button className="btn btn-sm btn-danger rounded-0">
                        <i className="fa fa-times"></i>
                    </button>
                    </td>
                </tr>
                <tr>
                    <td className="align-middle">
                    <img src={images.product2} alt="" style={{ width: "50px" }} />{" "}
                    Product Name
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                    <div
                        className="input-group quantity mx-auto"
                        style={{ width: "100px" }}
                    >
                        <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus rounded-0">
                            <i className="fa fa-minus"></i>
                        </button>
                        </div>
                        <input
                        type="text"
                        className="form-control form-control-sm bg-secondary border-0 rounded-0 text-center"
                        value="1"
                        />
                        <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus rounded-0">
                            <i className="fa fa-plus"></i>
                        </button>
                        </div>
                    </div>
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                    <button className="btn btn-sm btn-danger rounded-0">
                        <i className="fa fa-times"></i>
                    </button>
                    </td>
                </tr>
                <tr>
                    <td className="align-middle">
                    <img src={images.product3} alt="" style={{ width: "50px" }} />{" "}
                    Product Name
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                    <div
                        className="input-group quantity mx-auto"
                        style={{ width: "100px" }}
                    >
                        <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus rounded-0">
                            <i className="fa fa-minus"></i>
                        </button>
                        </div>
                        <input
                        type="text"
                        className="form-control form-control-sm bg-secondary border-0 rounded-0 text-center"
                        value="1"
                        />
                        <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus rounded-0">
                            <i className="fa fa-plus"></i>
                        </button>
                        </div>
                    </div>
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                    <button className="btn btn-sm btn-danger rounded-0">
                        <i className="fa fa-times"></i>
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </Col>
        <Col lg="3">
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
                </div>
                </div>
        </Col>
</Row>
    </>
  )
}

export default UserAllOrderCard