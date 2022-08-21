import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../CustomHooks/Auth/LoginHook';
import { ToastContainer } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import ForgotPasswordHook from '../../CustomHooks/Auth/ForgotPasswordHook';
import VerifyResetCodeHook from '../../CustomHooks/Auth/VerifyResetCodeHook';
import ResetPasswordHook from '../../CustomHooks/Auth/ResetPasswordHook';

const ResetPasswordPage = () => {
  const [ handleOnChange, handleSubmit, loading, newPassword ] = ResetPasswordHook()
  return (
    <>
      {/* Login Start */}
    <div className='my-5 py-5 w-50 bg-white container col-lg-6' >
      <div className='text-center mb-5'>
      <h2>Choose a new password.</h2>
      <p>Create a new password</p>
      </div>
      <Form onSubmit={handleSubmit} className='m-auto col-lg-6'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='password' onChange={handleOnChange} className='rounded-0' type="password" placeholder="New Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='confirmPassword' onChange={handleOnChange} className='rounded-0' type="password" placeholder="Retype New Password" />
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

export default ResetPasswordPage

