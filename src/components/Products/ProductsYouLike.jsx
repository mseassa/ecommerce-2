import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import images from '../../constants/images';
import SubTitle from './../Utils/SubTitle/SubTitle';
import ProductCard from './ProductCard/ProductCard';
import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';

const ProductsYouLike = () => {
  return (
    <>
        <SubTitle title='You may Also Like' />

        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <ProductCard title='Camera' img={images.product1}/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard title='Camera' img={images.product2}/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard title='Camera' img={images.product3}/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard title='Camera' img={images.product4}/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard title='Camera' img={images.product5}/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard title='Camera' img={images.product6}/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard title='Camera' img={images.product7}/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard title='Camera' img={images.product8}/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProductsYouLike