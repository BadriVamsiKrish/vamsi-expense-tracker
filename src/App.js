import Signin from './pages/Signin';
import Signup from './pages/Signup';
import './App.css';
import Expenseform from './pages/Expenseform';
import Userdetail from './pages/Userdetail';
import { useSelector ,useDispatch} from 'react-redux';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import { expenseActions } from './store/Expense-slice';
function App() {
  const bg=useSelector(state=>state.expense.background);
  const login=useSelector(state=>state.auth.wantlogin);
  const gmail=useSelector(state=>state.expense.gmail);
  const email=useSelector(state=>state.auth.email);
  const cart=useSelector(state=>state.expense.cart);
  const expenses=useSelector(state=>state.expense);
  const dispatch=useDispatch();
  const init=useSelector(state=>state.expense.init);
  useEffect(()=>{
    const getdata = async() =>{
      const response=await fetch(`https://react-http-f171e-default-rtdb.firebaseio.com/${gmail}.json`);
      if(!response.ok){
        throw new Error('getting is failed');
      };
      const responsedata=await response.json();
      dispatch(expenseActions.getfromdb(responsedata));
      dispatch(expenseActions.setinit());
    };
    if((email==='')&&(JSON.parse(localStorage.getItem('email')!==null))){
      const data=JSON.parse(localStorage.getItem('expense'));
      dispatch(expenseActions.getfromdb(data));
    };
    if((email!=='')){
    getdata().catch((err)=>{console.log(err)})
    console.log('success');
    console.log('get cart is not undefined send to reducer');
    }
    else{ 
      console.log('get cart if cart is empty in db');
    return ;
    };
  
  },[dispatch,email]);
  return (
    <BrowserRouter>
    <div className="App" >
      <header className="App-header" style={{backgroundColor:!bg?'white':'gray'}}>
        <Routes>
          <Route path='/' element={!login ?<Signup/>:<Signin/>}/>
          <Route path='/userdetails' element={<Userdetail/>}/>
          <Route path='/expenses' element={<Expenseform/>}/>
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
