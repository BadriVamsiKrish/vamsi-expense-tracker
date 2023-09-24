import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth-slice";
import ExpenseSlice from "./Expense-slice";
const Store=configureStore({
  reducer:{
    auth:AuthSlice,expense:ExpenseSlice
  }
});
export default Store;