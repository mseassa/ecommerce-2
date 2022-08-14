import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import {
    faHeart,
    faShoppingCart,
  } from "@fortawesome/free-solid-svg-icons";
import NavbarSearchHook from '../../../CustomHooks/Search/NavbarSearchHook';


const Header = () => {
  const [searchWord, onChangeSearchWord] = NavbarSearchHook()

  let word = '';
  if (localStorage.getItem('searchWord') != null) {
    word = localStorage.getItem('searchWord')
  }
  
  return (
    <>
            {/* Topbar Start */}
            <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                    <Link className="text-body me-3" to="">About</Link>
                    <Link className="text-body me-3" to="">Contact</Link>
                    <Link className="text-body me-3" to="">Help</Link>
                    <Link className="text-body me-3" to="">FAQs</Link>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                <Link className="text-body me-3" to="/login">Login</Link>
                <Link className="text-body me-3" to="/register">Signup</Link>
                </div>
                <div className="d-inline-flex align-items-center d-block d-lg-none">
                <Link to="" className="btn px-0">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="me-2 text-primary"
                    />
                    <span className="badge text-dark border border-dark rounded-circle">
                      0
                    </span>
                  </Link>
                  <Link to="/cart" className="btn">
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
    </div>


    <div className="container-fluid">
        <div className="row align-items-center bg-light py-3 px-xl-5 d-lg-flex justify-content-center">
            <div className="col-lg-4 d-none d-lg-block">
                <Link to="/" className="text-decoration-none">
                    <span className="h1 text-uppercase text-primary bg-dark px-2">Hamza</span>
                    <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                </Link>
            </div>
            <div className="col-lg-4 col-6 text-center">
                <form>
                    <div className="input-group">
                        <input type="text"
                        onChange={onChangeSearchWord} className="form-control rounded-0" placeholder="Search for products"
                        value={word} />
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary p-3 rounded-0">
                                <FontAwesomeIcon  icon={faSearch}/>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-4 col-6 text-end d-none d-lg-block">
                <p className="m-0">Customer Service</p>
                <h5 className="m-0">+012 345 6789</h5>
            </div>
        </div>
    </div>
    {/* Topbar End */}
    </>
  )
}

export default Header