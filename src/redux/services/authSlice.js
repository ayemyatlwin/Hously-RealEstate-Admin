import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
  image:null
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      (state.user = payload.user),(state.token = payload.token),(state.image = payload.image)
      ;
      Cookies.set("user", JSON.stringify(state.user));
      Cookies.set("token", state.token);
      Cookies.set("image", JSON.stringify(state.image));
    },
    removeUser: (state) => {
      (state.user = null), (state.token = null),(state.image = null);
      Cookies.remove("user");
      Cookies.remove("token");
      Cookies.remove("image");

    },
  },
});

export const { addUser,removeUser } = authSlice.actions;
export default authSlice.reducer;
