import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSearch,
  faShoppingCart,
  faStar,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/actions/productsAction";

const AdminProductCard = ({ item }) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  const handleDelete = () => {

    dispatch(deleteProduct(item._id))
    setShow(false);
    window.location.reload()
  };
  return (
    <>
      <Col xl="3" md="4" sm="6" className="pb-1">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete this product ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Yes, Delete
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="product-item bg-light mb-4">
          <Row className="d-flex justify-content-center p-2">
            <Col className=" d-flex justify-content-between">
              <Link to='' style={{cursor: 'pointer'}} onClick={handleShow} className="d-inline">
              <i className="fa fa-times p-1 text-danger"></i>
              </Link>
              <Link to={`/admin/editproduct/${item._id}`} style={{cursor: 'pointer'}} className="d-inline"><i className="fa fa-edit text-primary"></i></Link>
            </Col>
          </Row>
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src={item.imageCover}
              alt={item.title}
            />
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
            <Link
              className="h6 text-decoration-none text-truncate text-dark"
              to={`/products/${item._id}`}
            >
              {item.title}
            </Link>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$ {item.price}</h5>
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
      </Col>
    </>
  );
};

export default AdminProductCard;
