import React from "react";
import { Row, Form, Button, Spinner } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategoryHook from "../../CustomHooks/Category/AddCategoryHook";

const AdminAddCategory = () => {
  const [img, name, loading, handleSubmit, onImageChange, onChangeName] =
    AddCategoryHook();

  return (
    <>
      <Row className="justify-content-center ">
        <Col sm="8">
          <div className="text-form">Category Image</div>

          <Form className="m-auto">
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>
                <img
                  src={img}
                  alt=""
                  height="100px"
                  width="120px"
                  style={{ cursor: "pointer" }}
                />
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="file"
                placeholder="Enter Category name"
                onChange={onImageChange}
                style={{ display: "none" }}
              />
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Category name</Form.Label>
              <Form.Control
                value={name}
                onChange={onChangeName}
                className="rounded-0"
                type="text"
                placeholder="Enter Category name"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
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

export default AdminAddCategory;
