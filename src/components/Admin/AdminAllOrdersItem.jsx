import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import images from '../../constants/images'

const AdminAllOrdersItem = () => {
  return (
    <>
        <Col>
            <div className="table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                <tr>
                    <th>Order #</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody className="align-middle">
                
                <tr>
                    <td className="align-middle">
                    <Link className='text-decoration-none' to='order/:id'>
                    <img src={images.product1} alt="" style={{ width: "50px" }} />{" "}
                    Product Name
                    </Link>
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
                    <Link className='text-decoration-none' to='order/:id'>
                    <img src={images.product2} alt="" style={{ width: "50px" }} />{" "}
                    Product Name
                    </Link>
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
                    <Link className='text-decoration-none' to='order/:id'>
                    <img src={images.product3} alt="" style={{ width: "50px" }} />{" "}
                    Product Name
                    </Link>
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

export default AdminAllOrdersItem