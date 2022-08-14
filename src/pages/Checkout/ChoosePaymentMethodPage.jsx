import React from 'react'
import { Container } from 'react-bootstrap'
import { ChoosePayment } from '../../components'

const ChoosePaymentMethodPage = () => {
  return (
    <>
    <Container style={{minHeight: '670px'}}>
      <ChoosePayment />
    </Container>
    </>
  )
}

export default ChoosePaymentMethodPage