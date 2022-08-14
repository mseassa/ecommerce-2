import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import VendorCard from '../VendorCard/VendorCard';
import SubTitle from './../../Utils/SubTitle/SubTitle';
import Loader from './../../Utils/DottedLoader/Loader';

const VendorContainer = ({ vendor, loading }) => {

    
    
  return (
    <>
    <Container fluid>
            <SubTitle title='All Brands'  />
            <Row className='px-xl-5 pb-3 justify-content-center'>
                
            {
            loading === false ? (
                vendor
                ? vendor.map((item) => (
                    <Col
                    xl='2'
                    lg='3'
                    sm='4'
                    xs='6'
                    className='mb-3'
                    key={item._id}
                >
                    <VendorCard img={item.image} />
                </Col>
                ))
                : ""
            ) : <Loader />
            }

                
            </Row>
    </Container>
    </>
  )
}

export default VendorContainer