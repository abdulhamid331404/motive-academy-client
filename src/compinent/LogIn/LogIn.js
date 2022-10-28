import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const LogIn = () => {


const handleLogIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
}

    return (
       <div className='w-50 mx-auto border mt-5 p-5 bg-info border-round'>
        <h2>Pleace LogIn.....!</h2>
         <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email"  required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' required />
        </Form.Group>
        <Button variant="primary" size="lg">
        Block level button
      </Button>
        <Button variant="primary" type="">
          Submit
        </Button>
        <p>Don’t have a account? <Link to={'/register'}>Register now</Link></p>
      </Form>
       </div>
    );
};

export default LogIn;