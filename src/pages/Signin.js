import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import './Signin.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/Auth-slice';
import { expenseActions } from '../store/Expense-slice';
const Signin = () => {
  const emailref=useRef();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const signinhandler = () => {
    navigate('/expenses');
    const a=emailref.current.value;
    const b=a.substring(0,a.length-4);
    dispatch(expenseActions.setGmail(b));
    dispatch(authActions.setEmail(b));
    localStorage.setItem('email',JSON.stringify(b));
  };
  const signupbtn = () =>{ 
    dispatch(authActions.setWantlogin());
    
  };
  return (    
    <div className="signin-container">
      <p>Sign-in Page</p>
      <div className='head'>Sign-in Page</div>
      <label className="signin-label">User Email:</label>
      <input className="signin-input" type="text" ref={emailref} />
      <label className="signin-label">User Password:</label>
      <input className="signin-input" type="password" />
      <div className='signinbtn'>
        <Button variant="success"  onClick={signinhandler}>
          Sign In
        </Button>
        <Button variant="warning"  onClick={signupbtn}>
          goto signUp
        </Button>
        <Button variant="info" onClick={signinhandler}>
          Forgot Password
        </Button>
      </div>
      
    </div>
  );
}

export default Signin;
