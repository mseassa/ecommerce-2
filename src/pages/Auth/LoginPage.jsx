import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../CustomHooks/Auth/LoginHook';
import { ToastContainer } from 'react-toastify';
import { Spinner } from 'react-bootstrap';

const LoginPage = () => {
  const [ handleOnChange, handleSubmit, user, loading ] = LoginHook()
  return (
    <>
      {/* Login Start */}
    <div className='my-5 py-5 w-50 bg-white container col-lg-6' >
      <div className='text-center mb-5'>
      <h2>Login</h2>
      <p>Log In Your Account</p>
      </div>
      <Form onSubmit={handleSubmit} className='m-auto col-lg-6'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={user.email} name='email' onChange={handleOnChange} className='rounded-0' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={user.password} name='password' onChange={handleOnChange} className='rounded-0' type="password" placeholder="Password" />
      </Form.Group>
      <p className=''>
        <Link className='text-decoration-none ms-2 text-primary' to='/forgetpassword'>
        Forgot Password ?
        </Link>
      </p>
      <Button className='rounded-0' variant="primary" type="submit">
      {
        loading ? ('Login') : (<Spinner className='mx-4 ' animation="border" variant="dark" size='sm' />)
      }
      </Button>
    </Form>
<div>

      <p className='mt-5 text-center'>You don't have Account ? 
        <Link className='text-decoration-none ms-2 text-primary' to='/register'>
        Signup
        </Link>
      </p>
</div>
    </div>

    <Link className='text-decoration-none ms-2 text-primary' to='/admin/allorders'>
      Admin
      </Link>
    <Link className='text-decoration-none ms-2 text-primary' to='/user'>
      User
      </Link>
      <ToastContainer />
    {/* Login End */}
    </>
  )
}

export default LoginPage

