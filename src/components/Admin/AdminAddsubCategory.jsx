import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddSubCategoryHook from "../../CustomHooks/SubCategory/AddSubCategoryHook";


const AdminAddsubCategory = () => {
  
  const [id, name, loading, category, handleChange, handleSubmit, onChangeName ] = AddSubCategoryHook()

  return (
    <>
      <Row className="justify-content-center ">
        <Col sm="8">
          <Form className="m-auto">
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Subcategory name</Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Enter Subcategory name"
                value={name}
                onChange={ onChangeName}
              />
            </Form.Group>

            <Form.Select
              className="rounded-0"
              aria-label="Default select example"
              onChange={handleChange}
            >
              <option value="0">Choose category</option>
              {category
                ? category.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))
                : ""}
            </Form.Select>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center ">
          <Button
            className="rounded-0 d-flex align-items-center"
            variant="primary"
            onClick={handleSubmit}
            type="submit"
          >
            Save Changes
            {loading ? (
              ""
            ) : (
              <Spinner
                className="ms-2"
                animation="border"
                variant="dark"
                size="sm"
              />
            )}
          </Button>
        </Col>
      </Row>
      <ToastContainer />
    </>
  );
};

export default AdminAddsubCategory;
