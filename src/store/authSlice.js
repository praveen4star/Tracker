import { createAsyncThunk } from "@reduxjs/toolkit";
import {loginInfo,logout}  from "../services/auth.service";
import { createSlice } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("token"));


export const logauth = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const data = await  loginInfo(payload);
      return { user: data };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [logauth.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      console.log(action.payload);
      state.user = action.payload.user;
    },
    [logauth.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;