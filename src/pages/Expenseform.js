import './Signin.css';
import { Button ,Badge} from 'react-bootstrap';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import Expenses from './Expenses';
import Expenseslist from './Expenseslist';
import { useEffect, useState } from 'react';
import { expenseActions } from '../store/Expense-slice';
//let init=true;
const Expenseform = () => {
  //const[init,setinit]=useState(true);
  const dispatch=useDispatch();
  const expenses=useSelector(state=>state.expense); 
  const cart=useSelector(state=>state.expense.cart); 
  const email=useSelector(state=>state.expense.gmail);
  const navigate=useNavigate();
  const total=useSelector(state=>state.expense.total);
  const init=useSelector(state=>state.expense.init);
  useEffect(()=>{
    
    const senddata = async() =>{
      const response=await fetch(`https://react-http-f171e-default-rtdb.firebaseio.com/${email}.json`,{method:'PUT',body:JSON.stringify(expenses)});
      if(!response.ok){
        throw new Error('sending is failed');
      };
      const responsedata=await response.json();
    };
    if(init===false){
      console.log('expense form loaded and cart is 0 so send to db done');
      senddata().catch((err)=>{
        console.log(err);
      });
    };
    if((cart!== undefined)&& cart.length===0){
      //&& cart.length===0
      console.log('cart is undefined and cart length is 0 so not send to db');
      return ;
    }
    else{
      console.log('cart has values so send to db');
      localStorage.setItem('expense',JSON.stringify(expenses));
      senddata().catch((err)=>{
        console.log(err);
      });
  
    };
    
    
  },[dispatch,expenses,init]);
  const bghandler = () => {
    dispatch(expenseActions.setbg());
  };
  
  return (
    <div>
      <div className='head'>Expense Tracker.</div>
      <div className='signinbtn'> 
        <Button variant='info' onClick={()=>{navigate('/userdetails');}}>update profile</Button>
        <Button variant='warning' onClick={bghandler}>set backgrount</Button>
        <Button onClick={()=>{navigate('/');localStorage.removeItem('email');localStorage.removeItem('expense')}}>log out</Button>
      </div>
      <Expenses/>
    
    <div>
      <div style={{color:'black'}}>
        {total>10000 && <Button variant='info'>Premium</Button>}
        <h1>Expenses </h1>
        <h2>Total:<Badge bg='warning' text='dark'>{total}</Badge></h2>
      </div>
    
    <Expenseslist/> 
  </div>
  </div>
  )
};

export default Expenseform;
