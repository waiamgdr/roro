import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const creatorder = createAsyncThunk(
  "/creatorder",
  async (data, { rejectWithValue , dispatch}) => {
    try {
      dispatch( getallOrders())
      const res = await axios.post("/createorder/order", data,{
        headers:{token:localStorage.getItem('token')
    }});
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
// export const getOrders= createAsyncThunk('/getOrders',async(data,{rejectWithValue,})=>{
//    try {
//      const  res= await axios.get('/getOrders')
//        return res.data.orders
      
//    } catch (error) {
//        rejectWithValue(error.response.data.msg)
// }
   
//    }
// )
export const getallOrders= createAsyncThunk('/allorder',async(data,{rejectWithValue,})=>{
  try {
    const  res= await axios.get('/allorder',{
      headers:{token:localStorage.getItem('token')
  }})
      return res.data.orders
     
  } catch (error) {
      rejectWithValue(error.response.data.msg)
}
  
  }
)



const order_slice = createSlice({
  name: "order...",
  initialState: {
    OrderData:[],
    isLoading: false,
    error: null,
  },
  reducers: {
    
   

  },
  extraReducers: (builder) => {
    builder
      .addCase(creatorder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.OrderData=action.payload;
       
      })
      .addCase(creatorder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(creatorder.pending, (state,action) => {
        state.isLoading = true;
        
      })
      // .addCase(getOrders.fulfilled,(state,action)=>{
           
      //    state.isLoading=false
         
         
      // })
      // .addCase(getOrders.rejected,(state,action)=>{
        
      //    state.isLoading=false

     
      //    state.error=action.payload
      // })
      // .addCase(getOrders.pending,(state,action)=>{
        
      //    state.isLoading=true
         
      // })
      .addCase(getallOrders.fulfilled,(state,action)=>{
           
        state.isLoading=false
        state.OrderData= action.payload;
        
     })
     .addCase(getallOrders.rejected,(state,action)=>{
       
        state.isLoading=false

    
        state.error=action.payload
     })
     .addCase(getallOrders.pending,(state,action)=>{
       
        state.isLoading=true
        
     })
  }
  
});

export default order_slice.reducer;
export const {add } = order_slice.actions;
