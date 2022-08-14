import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Usernavbar = () => {
  return (
    <>
      <Nav defaultActiveKey="/home" className="flex-lg-column flex-row text-decoration-none mb-3 admin-side-bar bg-white p-3">
        <NavLink className="text-decoration-none p-2 border m-2" to="/user/allorders">Manage Orders</NavLink>
        <NavLink className="text-decoration-none p-2 border m-2" to="/user/favoriteproducts">Favorite Products</NavLink>
        <NavLink className="text-decoration-none p-2 border m-2" to="/user/addresses">Address</NavLink>
        <NavLink className="text-decoration-none p-2 border m-2" to="/user/profile">User Profile</NavLink>
      </Nav>
    </>
  );
};

export default Usernavbar;
