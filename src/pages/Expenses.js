import React from 'react';
import { Button } from 'react-bootstrap';
import './Signin.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { expenseActions } from '../store/Expense-slice';
const Expenses = () => {
  const dispatch=useDispatch();
  const moneyref=useRef();
  const descriptionref=useRef();
  const categoryref=useRef();
  const addfunction = () => {
    const data={
      money:moneyref.current.value,
      description:descriptionref.current.value,
      category:categoryref.current.value,
      id:Math.random()
    };
    dispatch(expenseActions.additem(data));
    moneyref.current.value='';
    descriptionref.current.value='';
    categoryref.current.value='';
  };
  return (
    <div>
      <div className="signin-container">
      <label className="signin-label">Money:</label>
      <input type='number' ref={moneyref}/>
      <label className="signin-label">description:</label>
      <input type='text' ref={descriptionref}/>
      <label className="signin-label">category:</label>
      <input type='text' ref={categoryref}/>
      <Button variant='info' className="signin-button" onClick={addfunction}>Add expense</Button>
    </div>
    </div>
  )
}

export default Expenses