import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <Nav defaultActiveKey="/home" className="flex-lg-column flex-row text-decoration-none mb-3 admin-side-bar bg-white p-3">
        <NavLink className="text-decoration-none p-2 border m-2" to="/admin/allorders">Manage Orders</NavLink>
        <NavLink className="text-decoration-none p-2 border m-2" to="/admin/allproducts">Manage Products</NavLink>
        <NavLink className="text-decoration-none p-2 border m-2" to="/admin/addvendor">Add Vendor</NavLink>
        <NavLink className="text-decoration-none p-2 border m-2" to="/admin/addcategory">Add category</NavLink>
        <NavLink className="text-decoration-none p-2 border m-2" to="/admin/addsubcategory">Add Sub Category</NavLink>
        <NavLink className="text-decoration-none p-2 border m-2" to="/admin/addproduct">Add product</NavLink>
      </Nav>
    </>
  );
};

export default AdminNavbar;
