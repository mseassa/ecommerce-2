import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDown,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import './NavbarLogin.css';
import NavbarCategoryHook from "../../../CustomHooks/Category/NavbarCateoryHook";

const NavbarLogin = () => {

  const [category, loading] = NavbarCategoryHook();

  return (
    <>
    {/* Navbar Start */}
      <div className="container-fluid bg-dark mb-4">
        <div className="row px-xl-5 align-items-center">
          <div className="dropdown col-lg-3 d-none d-lg-block">
            <button
              style={{ height: "65px", padding: "0 30px" }}
              className="dropdown-toggle d-flex border-0 align-items-center justify-content-between btn-primary rounded-0 w-100"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <h6 className="text-dark m-0">
                <FontAwesomeIcon icon={faBars} className="me-2" />
                Categories
              </h6>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <ul
              style={{ width: "calc(100% - 25px)", ZIndex: "999" }}
              className="dropdown-menu rounded-0 top-0 py-0"
              aria-labelledby="dropdownMenuButton1"
            >
              {loading === false ? (
                category ? (
                <>{category
                    .map((item) => (
                      <li key={item._id} className='border-bottom py-2'>
                <Link className="dropdown-item" to="/">
                  {item.name}
                </Link>
              </li>
                    ))}
                    <li className='border-bottom py-2'>
                <Link className="dropdown-item" to="/allcategories">
                  More
                </Link></li>
                    </>
                ) : (
                ""
                )
            ) : ('')}
                
                
            </ul>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg navbar-dark py-3 py-lg-0 px-0">
              <div className="container-fluid">
                <Link className="navbar-brand d-block d-lg-none" to="/">
                  <span className="h1 text-uppercase text-dark bg-light px-2">
                    Hamza
                  </span>
                  <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                    Shop
                  </span>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                  {loading === false ? (
                category ? (
                <>{category
                    .map((item) => (
                      <Link key={item._id} className="nav-link" aria-current="page" to="/">
                  {item.name}
                </Link>
                    ))}
                    <Link className="nav-link" aria-current="page" to="/allcategories">
                      More
                    </Link>
                    </>
                    ) : (
                      ""
                      )
                      ) : ('')}
                  
                  </div>
                  <div className="navbar-nav ms-auto d-none d-lg-block">
                  <Link to="" className="btn px-0">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="me-2 text-primary"
                    />
                    <span className="badge text-light border border-secondary rounded-circle">
                      0
                    </span>
                  </Link>
                  <Link to="/cart" className="btn ms-2">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="me-2 text-primary"
                    />
                    <span className="badge text-light border border-secondary rounded-circle">
                      0
                    </span>
                  </Link>
                </div>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default NavbarLogin;
