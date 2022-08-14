import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductText from '../ProductText/ProductText';
import Productgallery from './../ProductGallery/Productgallery';


const ProductDetails = () => {
  return (
    <>
    <Row className='py-3'>
        <Col lg='5'>
            <Productgallery />
        </Col>

        <Col lg='7'>
            <ProductText />
        </Col>
    </Row>
    </>
  )
}

export default ProductDetails