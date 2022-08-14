import React from 'react'
import images from '../../constants/images'
import { Col } from 'react-bootstrap';

const AdminOrderDetails = () => {
  return (
    <>
        <Col lg="8">
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
    </>
  )
}

export default AdminOrderDetails