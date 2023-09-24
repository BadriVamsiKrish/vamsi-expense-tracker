import { createSlice } from "@reduxjs/toolkit";
const Authslice=createSlice({
  name:'auth',
  initialState:{
    wantlogin:true,
    islogin:false,
    email:'',
    authid:'',
  },
  reducers:{
    setWantlogin(state){
      state.wantlogin=!state.wantlogin;
    },
    setIslogin(state){
      state.islogin=!state.islogin;
    },
    setEmail(state,action){
      state.email=action.payload;
    },
    setAuthid(state,action){
      state.authid=action.payload;
    }
  }
});
export const authActions=Authslice.actions;
export default Authslice.reducer;