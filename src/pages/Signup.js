import React, { useRef } from 'react';
import './Signin.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/Auth-slice';
import { expenseActions } from '../store/Expense-slice';
//import { expenseActions } from '../store/Expense-slice';
const Signup = () => {
  const emailref=useRef();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const signUphandler = () =>{
    const a=emailref.current.value;
    const b=a.substring(0,a.length-4);
    dispatch(expenseActions.setGmail(b));
    dispatch(authActions.setEmail(b));
    localStorage.setItem('email',JSON.stringify(b));
    navigate('/expenses');
    dispatch(authActions.setIslogin());
  };
  const signinbtn = () =>{
    dispatch(authActions.setWantlogin());
  }  
  return (
    <div className="signin-container">
      <div className='head'>Sign-up Page</div>
      <label className="signin-label">user email:</label>
      <input className="signin-input" type='text' ref={emailref}/>
      <label className="signin-label">user password:</label>
      <input className="signin-input" type='password'/>
      <div className='signinbtn'>
      <Button variant='success' className="signin-button" onClick={signUphandler}>sign up</Button>
      <Button variant='warning' className="signin-button" onClick={signinbtn}> Goto sign in</Button>
      </div>
    </div>
  )
}

export default Signup;
