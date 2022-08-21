import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import RegisterHook from '../../CustomHooks/Auth/RegisterHook';
import { ToastContainer } from 'react-toastify';
import { Spinner } from 'react-bootstrap';

const RegisterPage = () => {
  const [ getFormValue, handleSubmit, user, loading] = RegisterHook()
  return (
    <>
    {/* Login Start */}
  <div className='my-5 col-lg-6  py-5 w-50 bg-white container' >
    <div className='text-center mb-5'>
    <h2>Signup</h2>
    <p>Register New Account</p>
    </div>
    <Form onSubmit={handleSubmit} className='m-auto col-lg-6'>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>User Name</Form.Label>
      <Form.Control value={user.name} name='name' onChange={getFormValue} className='rounded-0' type="text" placeholder="Enter user name" />
      {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control value={user.email} name='email' onChange={getFormValue} className='rounded-0' type="email" placeholder="Enter Email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Phone</Form.Label>
      <Form.Control value={user.phone} name='phone' onChange={getFormValue} className='rounded-0' type="tel" placeholder="Enter Phone No" />
      <Form.Text className="text-muted">
        We'll never share your Phone No with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control value={user.password} name='password' onChange={getFormValue} className='rounded-0' type="password" placeholder="Enter Password" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control value={user.passwordConfirm} name='passwordConfirm' onChange={getFormValue} className='rounded-0' type="password" placeholder="Confirm Password" />
    </Form.Group>

    <Button className='rounded-0' variant="primary" type="submit">
      {
        loading ? ('Register') : (<Spinner className='mx-4 ' animation="border" variant="dark" size='sm' />)
      }
    </Button>
  </Form>
  <p className='mt-5 text-center'>Your Account ? 
    <Link className='text-decoration-none ms-2 text-primary' to='/login'>
    Signin
    </Link>
  </p>
  <ToastContainer />
  </div>
  {/* Login End */}
  </>
  )
}

export default RegisterPage