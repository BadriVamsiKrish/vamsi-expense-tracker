import { createSlice } from "@reduxjs/toolkit";

const Expenseslice=createSlice({
  name:'expense',
  initialState:{
    cart:[],
    total:0,
    init:true,
    background:true,
    gmail:'',
  },
  reducers:{
    additem(state,action){
      const addload=action.payload;
      if(addload===null){
        state.cart=[];
        state.total=0;
        state.init=true;
        state.background=true;
        state.gmail=''
      };
      if(state.cart=== undefined ){
        state.cart=[];
        state.cart.push(action.payload);
        state.total=parseInt(addload.money);
      }else{
      state.cart.push(addload);
      state.total=parseInt(state.total)+parseInt(addload.money);

      } 
    },
    deleteitem(state,action){
      const [money,deleteload]=action.payload;
      state.total-=parseInt(money);
      state.cart=state.cart.filter((item)=>item.id!==deleteload);
    },
    edititem(state,action){
      const [money,description,category,oldmoney,id]=action.payload;
      state.cart=state.cart.map((item)=>{if(item.id===id){
        return {money:money,description:description,category:category,id:id}};
        return item;
      });
      state.total=state.total+parseInt(money)-parseInt(oldmoney);
    },
    getfromdb(state,action){
      const addload=action.payload;
      console.log(addload);
      // if((state.cart===undefined)){
      //   state.cart=[];
      //   console.log('state.cart is undefined');
      //   state.total=0;
      //   state.gmail='';
      // }else{
        if(action.payload===null){
          console.log('action payload is null');
        state.cart=[];
        state.total=0;
        //state.gmail='';
        //console.log(state.cart);
        }
        else{
          console.log('action payload is not null');
          state.cart=action.payload.cart;
          state.total=action.payload.total;
          state.gmail=action.payload.gmail;
        }
        

      //} 
      // state.cart=action.payload.cart;
      // state.total=action.payload.total;
    },
    setinit(state,action){
      state.init=false;
    },
    setbg(state){
      state.background=!state.background;
    },
    setGmail(state,action){
      state.gmail=action.payload;
    }
  }
});
export const expenseActions=Expenseslice.actions;
export default Expenseslice.reducer;