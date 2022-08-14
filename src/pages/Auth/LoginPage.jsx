import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      {/* Login Start */}
    <div className='my-5 py-5 w-50 bg-white container col-lg-6' >
      <div className='text-center mb-5'>
      <h2>Login</h2>
      <p>Log In Your Account</p>
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
      <Form.Group className="mb-3 rounded-0" controlId="formBasicCheckbox">
        <Form.Check className='rounded-0' type="checkbox" label="Remember me" />
      </Form.Group>
      <Button className='rounded-0' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p className='mt-5 text-center'>You don't have Account ? 
      <Link className='text-decoration-none ms-2 text-primary' to='/register'>
      Signup
      </Link>
    </p>
    </div>

    <Link className='text-decoration-none ms-2 text-primary' to='/admin/allorders'>
      Admin
      </Link>
    <Link className='text-decoration-none ms-2 text-primary' to='/user'>
      User
      </Link>
    {/* Login End */}
    </>
  )
}

export default LoginPage

