import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../CustomHooks/Auth/LoginHook';
import { ToastContainer } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import ForgotPasswordHook from '../../CustomHooks/Auth/ForgotPasswordHook';
import VerifyResetCodeHook from '../../CustomHooks/Auth/VerifyResetCodeHook';

const VerifyResetCodePage = () => {
  const [ handleOnChange, handleSubmit, loading, code ] = VerifyResetCodeHook()
  return (
    <>
      {/* Login Start */}
    <div className='my-5 py-5 w-50 bg-white container col-lg-6' >
      <div className='text-center mb-5'>
      <h2>We sent a code to your email</h2>
      <p>Enter the verification code</p>
      </div>
      <Form onSubmit={handleSubmit} className='m-auto col-lg-6'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control value={code} name='text' onChange={handleOnChange} className='rounded-0' type="text" placeholder="Enter Code" />
      </Form.Group>

      <Button className='rounded-0' variant="primary" type="submit">
      {
        loading ? ('Confirm') : (<Spinner className='mx-4 ' animation="border" variant="dark" size='sm' />)
      }
      </Button>
    </Form>
    </div>
      <ToastContainer />
    {/* Login End */}
    </>
  )
}

export default VerifyResetCodePage

