import React from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddRateHook from "../../CustomHooks/Review/AddRateHook";
import ReactStars from "react-rating-stars-component";

const RatePost = () => {
const { id } = useParams();
const [
    user,
    onChangeRateText,
    onChangeRateValue,
    rateText,
    rateValue,
    handleSubmit,
] = AddRateHook(id);

const ratingChanged = (newRating) => {
    onChangeRateValue(newRating);
};
return (
    <>
    <Row>
        <div>
        <h4 className="mb-4">Reviews</h4>
        <h5>{user && user.name ? (user.name):('')}</h5>
        </div>
        <div className="d-flex align-items-center">
        <p className="mb-0 me-2">Your Rating * :</p>
        <div className="text-primary">
            <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color={"#FFD333"}
            activeColor={"#FFD333"}
            value={2.5}
            a11y={true}
            isHalf={true}
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
            filledIcon={<i className="fa fa-star" />}
            />
        </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="message">Your Review *</label>
            <textarea
            onChange={onChangeRateText}
            value={rateText}
            id="message"
            className="form-control rounded-0 mb-3"
            ></textarea>
        </div>
        <div className="form-group mb-0 text-end">
            <input
            type="submit"
            value="Leave Your Review"
            className="btn btn-primary rounded-0 mb-3 px-3"
            />
        </div>
        </form>
    </Row>
    </>
);
};

export default RatePost;
