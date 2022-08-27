import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../../CustomHooks/Products/ViewProductDetailsHook";
import ReactStars from "react-rating-stars-component";

const ProductText = () => {
  const { id } = useParams();
  const [item] = ViewProductDetailsHook(id);
  return (
    <>
<div>
        <div className="h-100 bg-light">
          <h3>{item.title}</h3>
          <div className="d-flex mb-3 align-items-center">
            <div className="me-2">
              {item.ratingsAverage > 0 ? (
                <ReactStars
                  edit={false}
                  count={5}
                  size={12}
                  color={"#FFD333"}
                  activeColor={"#FFD333"}
                  value={item.ratingsAverage}
                  a11y={true}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star" />}
                  halfIcon={<i className="fa fa-star-half-alt" />}
                  filledIcon={<i className="fa fa-star" />}
                />
              ) : (
                ""
              )}
            </div>
            <div>
              {
                item.ratingsQuantity > 0 ? (<small>({item.ratingsQuantity} Reviews)</small>) : ('')
              }
              
            </div>
          </div>
          <h3 className="font-weight-semi-bold mb-4">${item.price}</h3>
          <p className="mb-4">{item.description}</p>
  
          <Row className="mb-3 g-0">
            <h6>Colors : </h6>
            <form className="d-flex">
              {item.availableColors
                ? item.availableColors.map((color) => (
                    <label key={color} className="custom-checkbox-radio me-3">
                      <input type="radio" name="color" className="" />
                      <span className="checkmark me-2"></span>
                      <span className="label">
                        <div
                          className="color me-2 border-0 rounded-circle  mt-1"
                          style={{ backgroundColor: color }}
                        ></div>
                      </span>
                    </label>
                  ))
                : ""}
            </form>
          </Row>
          <div className="d-flex align-items-center mb-4 pt-2">
            <div className="input-group quantity me-3" style={{ width: "130px" }}>
              <div className="input-group-btn">
                <button className="btn btn-primary btn-minus rounded-0 ">
                  <FontAwesomeIcon icon={faMinus} className="text-dark" />
                </button>
              </div>
              <input
                type="text"
                className="form-control bg-white border-0 rounded-0 text-center"
                defaultValue="1"
              />
              <div className="input-group-btn">
                <button className="btn btn-primary btn-plus rounded-0">
                  <FontAwesomeIcon icon={faPlus} className="text-dark" />
                </button>
              </div>
            </div>
            <button className="btn btn-primary rounded-0 px-3">
              <FontAwesomeIcon icon={faShoppingCart} className="me-2 text-dark" />{" "}
              Add To Cart
            </button>
          </div>
        </div>
</div>
    </>
  );
};

export default ProductText;
