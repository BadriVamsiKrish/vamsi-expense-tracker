import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Signin.css';
import { useDispatch ,useSelector} from 'react-redux';
import { expenseActions } from '../store/Expense-slice';
const Expenseslist = () => {
  const cart=useSelector(state=>state.expense.cart);
  const dispatch=useDispatch();
  const deletefunction = (data) =>{
    dispatch(expenseActions.deleteitem(data));
  };
  const editfunction = (data) =>{
    const[w,x,y,z]=data;
    const a=prompt('eneter new money',w);
    const b=prompt('eneter new description',x);
    const c=prompt('eneter new category',y);
    dispatch(expenseActions.edititem([a,b,c,w,z]));
    //updatefunction(data);
  };  
  return (
    <div>
      <ul>
      {cart!==undefined && cart.map((item)=>{return <li key={item.id} className='listitem'>
        {item.money}--{item.description}--{item.category}
        <Button variant='info' onClick={()=>{editfunction([item.money,item.description,item.category,item.id])}}>edit</Button>
        <Button variant='danger' onClick={()=>{deletefunction([item.money,item.id])}}>delete</Button>
      </li>})}
    </ul>
    </div>
  )
}

export default Expenseslist;