import React from "react";
import { Container, Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";

const UserAllOrders = () => {
  return (
    <>
      <Container>
      <div>
        <h6 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Welcome User</span>
        </h6>
      </div>
        <Row className=" justify-content-between">
          <UserAllOrderItem />
        </Row>
      </Container>
    </>
  );
};

export default UserAllOrders;
