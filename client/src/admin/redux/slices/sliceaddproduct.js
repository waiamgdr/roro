import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//fonction  envoyer req 

export  const add_product=createAsyncThunk("/postproduct",async(data,{rejectWithValue,dispatch})=>{
try {
    const res=await axios.post("/postproduct",data,{
        headers:{token:localStorage.getItem('token')
    }})
    dispatch(getallproduct())
return  res.data
} catch (error) {
 return   rejectWithValue(error.response.data.msg)
   
}
})


// export  const URI_IMage=createAsyncThunk("/upload",async(data,{rejectWithValue})=>{
//     try {
//         const res=await axios.post("/upload",data)
        
//     return  res.data.image_url
//     } catch (error) {
//        rejectWithValue(error.response.data.msg)
       
//     }
//     })

    export const getallproduct= createAsyncThunk('/getallproduct',async(data,{rejectWithValue})=>{
        try {
          const  res= await axios.get('/')
            return res.data.products
        } catch (error) {
            return  rejectWithValue(error.response.data.msg)
    }
        
        }
    )
    

    export const deleteproduct= createAsyncThunk('/deleteproduct',async(data,{rejectWithValue, dispatch})=>{

        try {
          const  res= await axios.delete(`/deleteproduct/${data}`,{
            headers:{token:localStorage.getItem('token')
        }})
          dispatch(getallproduct())
          
            return  res.data
        } catch (error) {
            return rejectWithValue(error.response.data.msg)
    }
        
        }
    )


    export const updateproduct= createAsyncThunk('/updateproduct',async(data,{rejectWithValue, dispatch})=>{

        try {
          const  res= await axios.put(`/updateproduct/${data.id}`,data.data,{
            headers:{token:localStorage.getItem('token')
        }} )
          dispatch(getallproduct())
        return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.msg)
    }
        
        }
    )











 const product_slice_admin=createSlice({

    name:"product_slice",
    initialState:{
        product:{},
       isLoading:false,
       error:null ,
      
    
    },
    reducers:{
      
    },
    extraReducers:(builder)=>{
        builder.addCase(add_product.fulfilled,(state,action)=>{
           
           state.isLoading=false
           
           
        })
        .addCase(add_product.rejected,(state,action)=>{
          
           state.isLoading=false
        
           state.error=action.payload
        })
        .addCase(add_product.pending,(state)=>{      
           state.isLoading=true 
        }).addCase(getallproduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.product=action.payload    
         })
         .addCase(getallproduct.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
         })
         .addCase(getallproduct.pending,(state)=>{ 
            state.isLoading=true     
         }).addCase(updateproduct.fulfilled,(state)=>{
           
            state.isLoading=false
            
            
         })
         .addCase(updateproduct.rejected,(state,action)=>{       
            state.isLoading=false     
            state.error=action.payload
         })
         .addCase(updateproduct.pending,(state,action)=>{         
            state.isLoading=true      
         })
        }
   

   
})
 
 export default product_slice_admin.reducer
