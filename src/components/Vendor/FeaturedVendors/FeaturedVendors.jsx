import React from "react";
import { Container } from "react-bootstrap";
import SubTitle from "../../Utils/SubTitle/SubTitle";
import VendorCard from "./../VendorCard/VendorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper";
import HomeVendorsHook from "../../../CustomHooks/Vendors/HomeVendorsHook";
import Loader from "../../Utils/DottedLoader/Loader";

const FeaturedVendors = ({ title, btntitle }) => {
  const [vendor, loading] = HomeVendorsHook();
  return (
    <>
      <Container fluid>
        <SubTitle title={title} btntitle={btntitle} pathText="/allbrands" />

        <div className="row px-xl-5 pb-3">
          <Swiper
            slidesPerView={7}
            spaceBetween={30}
            slidesPerGroup={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 7,
                spaceBetween: 30,
              },
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Autoplay]}
            className="mySwiper"
            >
                {loading === false ? (
                vendor.length > 0 ? (
                    vendor.map((item) => (
                    <SwiperSlide key={item._id}>
                        <VendorCard img={item.image} />
                    </SwiperSlide>
                    ))
                ) : (
                    "No Brands"
                )
                ) : (
                <Loader />
                )}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default FeaturedVendors;
