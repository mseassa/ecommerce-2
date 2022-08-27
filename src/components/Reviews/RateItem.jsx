import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ViewAllReviewsHook from "./../../CustomHooks/Review/ViewAllReviewsHook";
import Pagination from "../Utils/Pagination/Pagination";
import DeleteReviewHook from "../../CustomHooks/Review/DeleteReviewHook";
import AddRateHook from "../../CustomHooks/Review/AddRateHook";
import UpdateReviewHook from './../../CustomHooks/Review/UpdateReviewHook';
import RatePost from "./RatePost";

const RateItem = ({ item }) => {
    const { id } = useParams();
    const [show, handleClose, handleShow, handleDelete] = DeleteReviewHook(item._id);
    const [showEdit, handleCloseEdit, handleShowEdit, handleEdit, onChangeReviewText, newReviewText, onChangeRateValue, newReviewRate] = UpdateReviewHook(item)
    const [allReviewsProduct, getPage] = ViewAllReviewsHook(id);
    const [user] = AddRateHook(id);

    const ratingChanged = (newRating) => {
        onChangeRateValue(newRating);
    };

    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Delete Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to delete this Review ?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleDelete}>
                Yes, Delete
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
            <Modal.Title>Update Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="d-flex align-items-center">
        <p className="mb-0 me-2">Your Rating * :</p>
        <div className="text-primary">
            <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color={"#FFD333"}
            activeColor={"#FFD333"}
            value={newReviewRate}
            a11y={true}
            isHalf={true}
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
            filledIcon={<i className="fa fa-star" />}
            />
        </div>
        </div>
        <form>
        <div className="form-group">
            <label htmlFor="message">Your Review *</label>
            <textarea
            onChange={onChangeReviewText}
            value={newReviewText}
            id="message"
            className="form-control rounded-0 mb-3"
            ></textarea>
        </div>
        </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
                Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
            Update
            </Button>
            </Modal.Footer>
        </Modal>

        <Row key={item._id} className=" justify-content-center">
            <div className="d-flex border border-primary m-3 justify-content-between align-items-lg-center py-2">
            {/* <img
                        src={images.user}
                        alt="pic"
                        className="img-fluid me-3 mt-1"
                        style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                    /> */}
            <div>
                <div className="d-flex justify-content-center align-items-center">
                <div className="me-3">
                    <h6 className="mb-0">{item.user.name}</h6>
                </div>
                <div>
                    <ReactStars
                    edit={false}
                    count={5}
                    size={12}
                    color={"#FFD333"}
                    activeColor={"#FFD333"}
                    value={item.rating}
                    a11y={true}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    filledIcon={<i className="fa fa-star" />}
                    />
                </div>
                <div className="ms-2">
                    <p className="mb-0">({item.rating})</p>
                </div>
                </div>
                <p className="mb-0">{item.review}</p>
            </div>
            <div>
                {user._id === item.user._id ? (
                <Row>
                    <Col className=" d-flex flex-column align-items-center justify-content-center">
                    <Link
                        onClick={handleShowEdit}
                        to=""
                        style={{ cursor: "pointer" }}
                        className="d-inline"
                    >
                        <i className="fa fa-edit text-primary"></i>
                    </Link>
                    <Link
                        onClick={handleShow}
                        to=""
                        style={{ cursor: "pointer" }}
                        className="d-inline"
                    >
                        <i className="fa fa-times p-1 text-danger"></i>
                    </Link>
                    </Col>
                </Row>
                ) : (
                ""
                )}
            </div>
            </div>
        </Row>
        <ToastContainer />
        {allReviewsProduct.paginationResult &&
        allReviewsProduct.paginationResult.numberOfPages > 1 ? (
            <Pagination
            pageCount={
                allReviewsProduct.paginationResult
                ? allReviewsProduct.paginationResult.numberOfPages
                : 0
            }
            onPress={getPage}
            />
        ) : (
            ""
        )}
        </>
    );
};

export default RateItem;
