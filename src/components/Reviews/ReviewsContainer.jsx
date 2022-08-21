import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import images from "../../constants/images";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from './../../CustomHooks/Products/ViewProductDetailsHook';

const ReviewsContainer = () => {
    const { id } = useParams();
    const [item] = ViewProductDetailsHook(id)

    const ratingChanged = (newRating) => {
    };
    return (
        <>
        <Container className="my-5 bg-white py-3">
            <Row>
            <Col md="6">
                <h4 className="mb-4">1 review for {item.title}</h4>
                <div className="d-flex mb-4">
                <img
                    src={images.user}
                    alt="pic"
                    className="img-fluid me-3 mt-1"
                    style={{ width: "60px", height: '60px', borderRadius: '50%' }}
                />
                <div className="">
                    <h6>
                    John Doe
                    <small>
                        {"  "}- <i>01 Jan 2045</i>
                    </small>
                    </h6>
                    <div className="text-primary mb-2">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                    <p>
                    Diam amet duo labore stet elitr ea clita ipsum, tempor labore
                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores
                    sed sed eirmod ipsum.
                    </p>
                </div>
                </div>
            </Col>
            <Col md="6">
                <h4 className="mb-4">Leave a review</h4>
                <small>
                Your email address will not be published. Required fields are
                marked *
                </small>
                <div className="d-flex my-3 align-items-center">
                <p className="mb-0 me-2">Your Rating * :</p>
                <div className="text-primary">
                    <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color={"#FFD333"}
                    activeColor={"#FFD333"}
                    value={7.5}
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
                    id="message"
                    cols="30"
                    rows="5"
                    className="form-control rounded-0 mb-3"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                    type="text"
                    className="form-control rounded-0 mb-3"
                    id="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                    type="email"
                    className="form-control rounded-0 mb-3"
                    id="email"
                    />
                </div>
                <div className="form-group mb-0">
                    <input
                    type="submit"
                    value="Leave Your Review"
                    className="btn btn-primary rounded-0 mb-3 px-3"
                    />
                </div>
                </form>
            </Col>
            </Row>
        </Container>
        </>
    );
};

export default ReviewsContainer;
