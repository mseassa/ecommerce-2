import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <>
    {/* Login Start */}
  <div className='my-5 col-lg-6  py-5 w-50 bg-white container' >
    <div className='text-center mb-5'>
    <h2>Signup</h2>
    <p>Register New Account</p>
    </div>
    <Form className='m-auto col-lg-6'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control className='rounded-0' type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control className='rounded-0' type="password" placeholder="Password" />
    </Form.Group>
    <Button className='rounded-0' variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  <p className='mt-5 text-center'>Your Account ? 
    <Link className='text-decoration-none ms-2 text-primary' to='/login'>
    Signin
    </Link>
  </p>
  </div>
  {/* Login End */}
  </>
  )
}

export default RegisterPage