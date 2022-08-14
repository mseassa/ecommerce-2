import React from "react";
import { Card, Col } from "react-bootstrap";

const VendorCard = ({img}) => {
  return (
    <>
      <Col>
        <Card>
          <Card.Img  src={img} />
        </Card>
      </Col>
    </>
  );
};

export default VendorCard;
