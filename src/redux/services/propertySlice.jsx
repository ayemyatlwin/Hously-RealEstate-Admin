import { createSlice } from "@reduxjs/toolkit";
//import Cookies from "js-cookie";

const initialState = {
  properties: [],
  rValue: "",
  tValue:""
};

export const propertySlice = createSlice({
  name: "propertySlice",
  initialState,
  reducers: {
    addProperty:(state,{payload})=>{
        state.properties=payload;
    },
    setRValue:(state,{payload})=>{
        state.rValue=payload;
    },
    setTValue:(state,{payload})=>{
      state.tValue=payload;
  }
  },
});

export const {addProperty,setRValue,setTValue} = propertySlice.actions;
export default propertySlice.reducer;
