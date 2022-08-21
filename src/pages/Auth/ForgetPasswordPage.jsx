import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../CustomHooks/Auth/LoginHook';
import { ToastContainer } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import ForgotPasswordHook from '../../CustomHooks/Auth/ForgotPasswordHook';

const ForgetPasswordPage = () => {
  const [ handleOnChange, handleSubmit, loading, email ] = ForgotPasswordHook()
  return (
    <>
      {/* Login Start */}
    <div className='my-5 py-5 w-50 bg-white container col-lg-6' >
      <div className='text-center mb-5'>
      <h2>Forgot password?</h2>
      <p>Reset password in two quick steps</p>
      </div>
      <Form onSubmit={handleSubmit} className='m-auto col-lg-6'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} name='email' onChange={handleOnChange} className='rounded-0' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button className='rounded-0' variant="primary" type="submit">
      {
        loading ? ('Send Code') : (<Spinner className='mx-4 ' animation="border" variant="dark" size='sm' />)
      }
      </Button>
    </Form>
    </div>
      <ToastContainer />
    {/* Login End */}
    </>
  )
}

export default ForgetPasswordPage

