import React from "react";
import { Row, Form, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import images from "../../constants/images";
import Multiselect from "multiselect-react-dropdown";
import ImageUploading from "react-images-uploading";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import AddProductHook from "./../../CustomHooks/Products/AddProductHook";

const AdminAddProduct = () => {
  const [
    imgs,
    onChange,
    prodName,
    prodDescription,
    prodPrice,
    priceAfter,
    qty,
    onSelectCategory,
    catID,
    category,
    options,
    onSelect,
    onRemove,
    onSelectVendor,
    vendor,
    brandID,
    colors,
    removeColor,
    showColor,
    handleChangeComplete,
    handleSubmit,
    onChangeProdName,
    onChangeprodDescription,
    onChangePriceBefor,
    onChangePriceAfter,
    onChangeQty,
    onChangeColor
  ] = AddProductHook();
  return (
    <>
      <Row className="justify-content-center ">
        <Col sm="8">
          <div className="text-form">Product Images</div>
          <div>
            <ImageUploading
              multiple
              value={imgs}
              onChange={onChange}
              maxNumber={12}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div className="upload__image-wrapper text-start">
                  <div className="d-flex flex-wrap justify-content-around">
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item col-2">
                        <img
                          src={image["data_url"]}
                          alt=""
                          width="100"
                          height="100"
                        />
                        <div className="image-item__btn-wrapper position-relative">
                          <button
                            onClick={() => onImageRemove(index)}
                            className="btn btn-sm btn-danger rounded-0 position-absolute end-0 bottom-0"
                          >
                            <i className="fa fa-times p-1"></i>
                          </button>
                          <button
                            onClick={() => onImageUpdate(index)}
                            className="btn btn-sm btn-primary rounded-0 position-absolute end-0 top-0"
                          >
                            <i className="fa fa-edit"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="rounded-0"
                    variant="light"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <img
                      src={images.avatar}
                      alt=""
                      height="100px"
                      width="120px"
                      style={{ cursor: "pointer" }}
                    />
                  </Button>
                </div>
              )}
            </ImageUploading>
          </div>
          <Form className="m-auto">
            
            {/* <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label><img
                      src={images.avatar}
                      alt=""
                      height="100px"
                      width="120px"
                      style={{ cursor: "pointer" }}
                    /></Form.Label>
              <Form.Control
                className="rounded-0 d-none"
                type="file"
                placeholder="Enter product name"
                // value={prodName}
                onChange={onChangeImgs}
              />
            </Form.Group> */}
            {/* <div
                      className="color me-2 border-0 rounded-circle  mt-1 d-flex justify-content-between align-items-center"
                    >
            {imgs.length > 0
              ? imgs.map((item, index) => <div key={index} className="">
                <img width="100"
                          height="100" className='border' key={index} src={item} alt="" />
              </div>)
              : ""}
              </div> */}


            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Enter product name"
                value={prodName}
                onChange={onChangeProdName}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                className="rounded-0"
                type="text"
                placeholder="Enter product Description"
                value={prodDescription}
                onChange={onChangeprodDescription}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Product Price Before</Form.Label>
              <Form.Control
                className="rounded-0"
                type="number"
                placeholder="Enter product Price"
                value={prodPrice}
                onChange={onChangePriceBefor}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Product Price After</Form.Label>
              <Form.Control
                className="rounded-0"
                type="number"
                placeholder="Enter product Price"
                value={priceAfter}
                onChange={onChangePriceAfter}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                className="rounded-0"
                type="number"
                placeholder="Enter product avaliable quantity"
                value={qty}
                onChange={onChangeQty}
              />
            </Form.Group>

            <Form.Select
              className="rounded-0 my-3"
              aria-label="Default select example"
              onChange={onSelectCategory}
            >
              <option value='0'>Choose category</option>
              {category
                ? category.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))
                : ""}
            </Form.Select>

            <Multiselect
              className="multi-select"
              placeholder="SubCategory"
              options={options}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
              id="css_custom"
              style={{
                chips: {
                  background: "#FFD333",
                },
                multiselectContainer: {},
                searchBox: {
                  borderRadius: "0",
                },
              }}
            />

            <Form.Select
              className="rounded-0 my-3"
              aria-label="Default select example"
              onChange={onSelectVendor}
            >
              <option value='0'>Choose Vendor</option>
              {vendor
                ? vendor.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))
                : ""}
            </Form.Select>





          </Form>

          <div className="text-form mt-3 "> Avaliable Colors</div>
          <div className="mt-1 d-flex">
            {colors.length > 0
              ? colors.map((color, index) => {
                  return (
                    <div
                      onClick={() => removeColor(color)}
                      key={index}
                      className="color me-2 border-0 rounded-circle  mt-1"
                      style={{ backgroundColor: color, cursor: "pointer" }}
                    ></div>
                  );
                })
              : ""}

            <img
              onClick={onChangeColor}
              src={images.add}
              alt=""
              width="30px"
              height="35px"
              className=""
              style={{ cursor: "pointer" }}
            />
            {showColor ? (
              <CompactPicker onChangeComplete={handleChangeComplete} />
            ) : (
              ""
            )}
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center ">
          <Button
            onClick={handleSubmit}
            className="rounded-0 mb-5"
            variant="primary"
            type="submit"
          >
            Save Changes
          </Button>
        </Col>
      </Row>
      <ToastContainer />
    </>
  );
};

export default AdminAddProduct;
