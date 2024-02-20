import React from "react";
import'./AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useRef, useState } from 'react'
import {  useDispatch} from 'react-redux'
import {add_product } from '../../redux/slices/sliceaddproduct';
import axios from 'axios';

const AddProduct = () => {
const [images,setImages]=useState()
 
 const Name=useRef()
 const Description=useRef()
 const Image=useRef()
 const Newprice=useRef()
 const Oldprice=useRef()
 const Category=useRef()
 const dispatch=useDispatch()

 const [file, setFile] = useState(null);
 const [loading, setLoading] = useState(false);
 const [res, setRes] = useState({});
 const [imageee, setImageee]=useState();

 const handleUpload = async () => {
    
   
     setLoading(true);
     let responseData;
     let formData = new FormData();
     formData.append("my_file", file);
      await axios.post("/upload", formData,{headers:{Accept:'application/json'}}).
      then((data)=>{setImageee(responseData=data.data.secure_url)})
      console.log(responseData)
      if(responseData){
     dispatch(add_product({
        name:Name.current.value , 
          description:Description.current.value,
          image:responseData, 
          new_price:Newprice.current.value,
          old_price:Oldprice.current.value,
          category:Category.current.value
  })) }

      

   
 };
 
 


 

 


    const imagHandler=(event)=>{
       
setFile(event.target.files[0]);

    }

   
      
    

    
  return (
    <div className="add-prodcut">

<div className='addproduct-itemfield'>
    <p> Product Title </p>
    <input ref={Name}  type='text' name='name' placeholder='Type here'/>

</div>
<div className='addproduct-itemfield'>
    <p> Product Description</p>
    <input  ref={Description}  type='text' name='description' placeholder='Type here'/>

</div>
<div className='addproduct-price'>
<div className='addproduct-itemfield'>
    <p> Price </p>
    <input ref={Oldprice}  type='text' name='old_price' placeholder='Type here'/>

</div>
<div className='addproduct-itemfield'>
    <p>Offre  Price </p>
    <input ref={Newprice}  type='text' name='new_price' placeholder='Type here'/>

</div>
</div>
<div className='addproduct-itemfield'>
    <p>Product categeory </p>
    <select ref={Category}  name='categeory ' className='add-product-selector'>
<option value="women"> women </option>
<option value="men"> men </option>
<option value="kid"> kid </option>
    </select>

</div>
<div className='addproduct-itemfield' >
<label htmlFor="file-input" className="btn-grey">
<img  src={ file?URL.createObjectURL(file):upload_area } className='thmail-img'/>
      </label>
      
      <input  ref={Image}   onChange={imagHandler} type='file' name='product' id='file-input' hidden/>
      </div>
     
      
          <button onClick={ handleUpload}  className="add-prodcut-btn">ADD
            
          </button>
        
        
     



    </div>
  )
}

export default AddProduct