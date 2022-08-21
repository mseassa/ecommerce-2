import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

const UserProfile = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
      if (localStorage.getItem("user") !== null) {
        setUser(JSON.parse(localStorage.getItem("user")));
      }
    }, []);

  return (
    <>
      <div className="user-address-card my-3 px-2 bg-light">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex align-items-center">
            <div className="p-2">Name : </div>
            <div className="p-1 item-delete-edit">{user.name}</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div className="d-flex mx-2">
              {/* <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            /> */}
              <p className="item-delete-edit"> Edit</p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex align-items-center">
            <div className="p-2">Phone : </div>
            <div className="p-1 item-delete-edit">{user.phone}</div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex align-items-center">
            <div className="p-2">Email : </div>
            <div className="p-1 item-delete-edit">{user.email}</div>
          </Col>
        </Row>
      </div>

      <div className="bg-light">
        <Row className="mt-5 p-3">
          <Col xs="10" sm="8" md="6" className="">
            <div><h6>Reset Password : </h6></div>
            <Form>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Col>
                  <Form.Control className='rounded-0' type="password" placeholder="Enter old Password" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Col>
                  <Form.Control type="password" placeholder="Enter new Password" />
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button className="btn btn-primary mt-2 ">Save</button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserProfile;
