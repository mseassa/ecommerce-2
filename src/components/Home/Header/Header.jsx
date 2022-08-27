import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faHeart, faShoppingCart, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import NavbarSearchHook from "../../../CustomHooks/Search/NavbarSearchHook";
// import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserWishList } from './../../../Redux/actions/wishListAction';


const Header = () => {
  const [searchWord, onChangeSearchWord] = NavbarSearchHook();

  let word = "";
  if (localStorage.getItem("searchWord") != null) {
    word = localStorage.getItem("searchWord");
  }

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user.name]);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser({});
    // navigate('/')
    window.location.href = '/'
  };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //     const get = async () => {
  //     await dispatch(getLoggedUserWishList());
  //     };
  //     get();
  // }, []);

  // const response = useSelector(
  //     (state) => state.WishListReducer.loggedUserWidshList.data
  // );

  // const [favProductsCount, setFavProductsCount] = useState(0)

  // useEffect(() => {
  //   console.log('out');
  //   if (response) {
  //     console.log('in');
  //   setFavProductsCount(response.length)
  //   }
  // }, [response])
  
  

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid">
        <div className="row align-items-center justify-content-sm-evenly bg-secondary py-3 px-xl-5 d-lg-flex justify-content-center">
          <div className="col-lg-3 d-none d-lg-block">
            <Link to="/" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">
                Hamza
              </span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                Shop
              </span>
            </Link>
          </div>
          <div className="col-12 mb-2 col-lg-3 mb-md-2 text-center">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  onChange={onChangeSearchWord}
                  className="form-control rounded-0"
                  placeholder="Search for products"
                  value={word}
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary p-3 rounded-0">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-5 col-lg-4 d-flex justify-content-start justify-content-lg-end">
            <div className="d-flex align-items-center justify-content-between">
              {user.name ? (
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Hi {user.name} <FontAwesomeIcon icon={faAngleDown} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link className='text-decoration-none text-dark dropdown-item' to='/user/profile'>Profile</Link>
                    {
                      user.role === 'admin' ? (<Link className='text-decoration-none text-dark dropdown-item' to='/admin'>Dashboard</Link>) : ('')
                    }
                    <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Link className="me-3 text-decoration-none btn btn-outline-primary" to="/login">
                    Login
                  </Link>
                  <Link className="me-3 btn btn-outline-primary" to="/register">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="col-5 col-lg-2 d-flex align-items-center justify-content-center border">
            <Link to="" className="btn px-0">
              <FontAwesomeIcon icon={faHeart} className="me-2 text-primary" />
              <span className="badge text-dark border border-dark rounded-circle">
                {/* {favProductsCount >= 1 ? (favProductsCount) : ('0')} */}
                0
              </span>
            </Link>
            <Link to="/cart" className="btn ms-2">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="me-2 text-primary"
              />
              <span className="badge text-dark border border-dark rounded-circle">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>


      {/* Topbar End */}
    </>
  );
};

export default Header;
