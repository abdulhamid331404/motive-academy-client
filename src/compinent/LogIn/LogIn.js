import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config'

const auth = getAuth(app);

const LogIn = () => {

const handleLogIn = event =>{
    event.preventDefault();
    const form = event.target;
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
        <Button variant="success" size="lg"><FaGoogle/> Sin In With Google
      </Button><br />
      <br />
        <Button variant="success" size="lg"> <FaGithub/> 
            SinIn With Github
      </Button><br />
      <br />
     
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>Don’t have a account? <Link to={'/register'}>Register now</Link></p>
      </Form>
       </div>
    );
};

export default LogIn;