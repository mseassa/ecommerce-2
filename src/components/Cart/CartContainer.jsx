import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTitle from './../Utils/SubTitle/SubTitle';
import CartCheckout from './CartCheckout';
import CartItems from './CartItems';

const CartContainer = ({ title }) => {
    return (
        <>
        <Container fluid>
                <SubTitle title={title}  />

            <Row className="px-xl-5 pb-3">
            <CartItems />
            <CartCheckout />
            </Row>

        </Container>
        </>
    )
}

export default CartContainer