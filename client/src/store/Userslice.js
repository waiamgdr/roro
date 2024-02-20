import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//fonction  envoyer req

export const userLogin = createAsyncThunk(
  "/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("/login", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
export const userRegister = createAsyncThunk(
  "/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("/register", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);



const itmes =
  localStorage.getItem("Data") !== null
    ? JSON.parse(localStorage.getItem("Data"))
    : {};

const setItemFunc = (item) => {
  localStorage.setItem("Data", JSON.stringify(item));
};

const userslice = createSlice({
  name: "userSlice",
  initialState: {
    userData: itmes,
    Token: localStorage.getItem("token") || null,
    
    isLoading: false,
    error: null,
    isAuth: localStorage.getItem("isAuth") || false,
  },
  reducers: {
    pushhh:(state,action)=>{
       state.userData=action.payload

    },


    logout: (state) => {
      state.Token = null;
      state.isAuth = false;
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("productcartArray");
      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalAmount");
      localStorage.removeItem("totalQuantity");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.Token = action.payload.token;
        state.userData = action.payload.user;
        state.isLoading = false;
        state.isAuth = true;
        localStorage.setItem("userdata", JSON.stringify(state.userData));
        localStorage.setItem("token", state.Token);

        localStorage.setItem("isAuth", state.isAuth);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.Token = false;
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.payload;
      
      })
      .addCase(userLogin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.Token = action.payload.token;
        state.userData = action.payload.user;
        state.isLoading = false;
        state.isAuth = true;
        localStorage.setItem("token", state.Token);
        localStorage.setItem("isAuth", state.isAuth);
        
        localStorage.setItem("userdata", JSON.stringify(action.payload.user));
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.Token = false;
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.payload;
      })
      .addCase(userRegister.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});
export default userslice.reducer;
export const { logout,pushhh } = userslice.actions;
