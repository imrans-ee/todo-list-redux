
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Route,useNavigate } from 'react-router-dom';
import { login } from './Actions';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Login() {

    const [userName,setUserName]= useState();
     const [password,setPassword] = useState();

     const value = useSelector(state =>state.loggedReducer )

     const navigate = useNavigate();   

     const dispatch = useDispatch();

     

     console.log(userName)
     console.log(password)

     const hanldeSubmit =(e)=>{   
       e.preventDefault();

     dispatch(login(userName,password))
       console.log(userName,password)
        console.log(value)
        if(value){
            navigate('/home');             
        }
        else{
          alert("invalid")
        }
       
     }

  return (
    <>
    <h1>Login</h1>
    <Form >
        
      <Form.Group className="mb-3 input-sm" controlId="formBasicEmail" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username"  onChange={e=>setUserName(e.target.value)} />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={e=>setPassword(e.target.value)}  />
      </Form.Group>
    

      <Button variant="primary" type="submit" onClick={hanldeSubmit}>

        Submit
      </Button>
    </Form>
    </>
  );
}

export default Login;