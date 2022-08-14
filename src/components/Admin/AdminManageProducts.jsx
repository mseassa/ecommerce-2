import React from "react";
import { Row } from "react-bootstrap";
import AdminProductCard from "./AdminProductCard";

const AdminManageProducts = ({ products }) => {
  return (
    <>
      
      <Row className="justify-content-center">
        {
          products ? (products.map((item)=> <AdminProductCard key={item._id} item={item} />)) : <h4>No Products</h4>
        }
      </Row>
    </>
  );
};

export default AdminManageProducts;
