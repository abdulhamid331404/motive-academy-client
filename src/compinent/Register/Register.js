import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config'

const auth = getAuth(app);

const Register = () => {

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
    
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user
          form.reset();
          })
        .catch((error) =>{
          console.error('error', error);
        } )
      console.log(email, password);
        console.log(name, email, password);
    }

    return (
        <div className='w-50 mx-auto border mt-5 p-5 bg-info border-round'>
        <h2>Pleace Register.....!</h2>
         <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name"  required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email"  required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' required />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>Already have a account?<Link to={'/login'}> Log in</Link></p>
      </Form>
       </div>
    );
};

export default Register;