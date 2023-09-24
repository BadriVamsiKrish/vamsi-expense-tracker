import React from 'react';
import './Signin.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Userdetail = () => {
  const navigate=useNavigate();
  const userhandler = () => {
    navigate('/expenses');
  }
  return (
    <div className="signin-container">
      <div className='head'>Update-detail Page</div>
      <label className="signin-label">user name:</label>
      <input className="signin-input" type='text'/>
      <label className="signin-label">user photourl:</label>
      <input className="signin-input" type='text'/>
      <Button variant='info' className="signin-button" onClick={userhandler}>update details</Button>
    </div>
  )
}

export default Userdetail