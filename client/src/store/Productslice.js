import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//fonction  envoyer req 


    export const getallproduct= createAsyncThunk('/getallproduct',async(data,{rejectWithValue, })=>{
        try {
          const  res= await axios.get('/')
            return res.data.products
        } catch (error) {
            rejectWithValue(error.response.data.msg)
    }
        
        }
    )
    

   











 const product_slice=createSlice({

    name:"product_slice",
    initialState:{
       product:[],
       isLoading:false,
       error:null ,
      
    
    },
    reducers:{
       

       



        
      
    },
    extraReducers:(builder)=>{
        builder.addCase(getallproduct.fulfilled,(state,action)=>{
           
            state.isLoading=false
            state.product=action.payload
            
         })
         .addCase(getallproduct.rejected,(state,action)=>{
           
            state.isLoading=false

        
            state.error=action.payload
         })
         .addCase(getallproduct.pending,(state,action)=>{
           
            state.isLoading=true
            
         })
        }
   

   
})
 
 export default product_slice.reducer
