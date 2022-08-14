import React from "react";
import images from "../../../constants/images";
import './Slider.css'

const Slider = () => {
  return (
    <>
      {/* Carousel Start */}

      <div className="container-fluid mb-3">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <div>
              <div
                id="carouselExampleIndicators"
                className="carousel slide carousel-fade mb-4 mb-lg-0"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators test">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" style={{ height: "430px" }}>
                    <img
                      style={{objectFit: 'cover'}}
                      src={images.carousel1}
                      className="d-block w-100 h-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                          Men Fashion
                        </h1>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                          Lorem rebum magna amet lorem magna erat diam stet.
                          Sadips duo stet amet amet ndiam elitr ipsum diam
                        </p>
                        <a
                          className="btn btn-outline-light py-2 px-4 mt-3 rounded-0 animate__animated animate__fadeInUp"
                          href="#"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ height: "430px" }}>
                    <img
                      style={{objectFit: 'cover'}}
                      src={images.carousel2}
                      className="d-block w-100 h-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                          Women Fashion
                        </h1>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                          Lorem rebum magna amet lorem magna erat diam stet.
                          Sadips duo stet amet amet ndiam elitr ipsum diam
                        </p>
                        <a
                          className="btn btn-outline-light py-2 px-4 mt-3 rounded-0 animate__animated animate__fadeInUp"
                          href="#"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ height: "430px" }}>
                    <img
                      style={{objectFit: 'cover'}}
                      src={images.carousel3}
                      className="d-block w-100 h-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                          Kids Fashion
                        </h1>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                          Lorem rebum magna amet lorem magna erat diam stet.
                          Sadips duo stet amet amet ndiam elitr ipsum diam
                        </p>
                        <a
                          className="btn btn-outline-light py-2 px-4 mt-3 rounded-0 animate__animated animate__fadeInUp"
                          href="#"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <div className="product-offer mb-30" style={{ height: "200px" }}>
                <img className="img-fluid" src={images.offer1} alt="" />
                <div className="offer-text">
                  <h6 className="text-white text-uppercase">Save 20%</h6>
                  <h3 className="text-white mb-3">Special Offer</h3>
                  <a href="" className="btn btn-primary rounded-0">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="product-offer mb-30" style={{ height: "200px" }}>
                <img className="img-fluid" src={images.offer2} alt="" />
                <div className="offer-text">
                  <h6 className="text-white text-uppercase">Save 20%</h6>
                  <h3 className="text-white mb-3">Special Offer</h3>
                  <a href="" className="btn btn-primary rounded-0">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel End */}
    </>
  );
};

export default Slider;
