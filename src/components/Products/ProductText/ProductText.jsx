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

const ProductText = () => {
  const { id } = useParams();
  const [item] = ViewProductDetailsHook(id)
  return (
    <>
      <div className="h-100 bg-light p-30">
        <h3>{item.title}</h3>
        <div className="d-flex mb-3">
          <div className="text-primary mr-2">
            <small>
              <FontAwesomeIcon icon={faStar} />
            </small>
            <small>
              <FontAwesomeIcon icon={faStar} />
            </small>
            <small>
              <FontAwesomeIcon icon={faStar} />
            </small>
            <small>
              <FontAwesomeIcon icon={faStar} />
            </small>
            <small className="fas fa-star-half-alt">
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </small>
          </div>
          <small className="pt-1">(99 Reviews)</small>
        </div>
        <h3 className="font-weight-semi-bold mb-4">${item.price}</h3>
        <p className="mb-4">
          {item.description}
        </p>
        {/* <Row className='mb-3'>
          <h6>Sizes : </h6>
            <form className="d-flex">
                <label className="custom-checkbox-radio me-3">
                  <input type="radio" name="size" />
                  <span className="checkmark me-2"></span>
                  <span className="label">XS</span>
                </label>

                <label className="custom-checkbox-radio me-3">
                  <input type="radio" name="size" />
                  <span className="checkmark me-2"></span>
                  <span className="label">S</span>
                </label>
                <label className="custom-checkbox-radio me-3">
                  <input type="radio" name="size" />
                  <span className="checkmark me-2"></span>
                  <span className="label">LG</span>
                </label>
                <label className="custom-checkbox-radio me-3">
                  <input type="radio" name="size" />
                  <span className="checkmark me-2"></span>
                  <span className="label">MD</span>
                </label>
                <label className="custom-checkbox-radio me-3">
                  <input type="radio" name="size" />
                  <span className="checkmark me-2"></span>
                  <span className="label">XL</span>
                </label>
                <label className="custom-checkbox-radio me-3">
                  <input type="radio" name="size" />
                  <span className="checkmark me-2"></span>
                  <span className="label">XXL</span>
                </label>
            </form>
        </Row> */}

        <Row className='mb-3'>
          <h6>Colors : </h6>
            <form className="d-flex">
              {
                item.availableColors ? (item.availableColors.map((color) => <label key={color} className="custom-checkbox-radio me-3">
                <input type="radio" name='color' className="" />
                <span className="checkmark me-2"></span>
                <span className="label"><div
                      className="color me-2 border-0 rounded-circle  mt-1"
                      style={{ backgroundColor: color,  }}
                    ></div></span>
              </label>)) : ('')
              }
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
    </>
  );
};

export default ProductText;
