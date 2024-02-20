import react , { useEffect, useRef, useState } from 'react';
import {  deleteproduct, getallproduct, updateproduct } from '../../redux/slices/sliceaddproduct'
import upload_area from '../../assets/upload_area.svg'
import './ListProduct.css'
import { useDispatch , useSelector} from 'react-redux'
import cross_icon from '../../assets/cross_icon.png'

import axios from 'axios';


const ListProduct = () => {
 
  const  {product}=useSelector(state=>state.product)

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const [imageee, setImageee]=useState();
  const [data, setData]=useState();

  const [images,setImages]=useState(false)
 
  const imagHandler=(event)=>{
       
    setFile(event.target.files[0]);
    
        }

    

    const Image=useRef()
    
    
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getallproduct())
  },[])

  
 
  return (
    <div className="List-Product">
      <h1> All Product List </h1>
      <div className='listproduct-format-main'>
        <p> Products </p>
        <p> Title </p>
        <p>Discription</p>
        <p>Old price</p>
        <p> New price </p>
        <p> Category </p>
        <p > Remove </p>
        <p>Update</p> 
        

      </div>
      
      <div className='listprodict-allproducts'>



        <hr/>
        
        { Array.isArray(product) && product.map((el)=>(
          
         <> 
          <div   className='listproduct-format-main  listproduct-format'>  
          <img src={el.image} className='listproduct-product-img'/>
          <p> {el.name} </p>
          <p> {el.description} </p>
          <p> ${el.new_price} </p>
          <p>${el.old_price} </p>
          <p> {el.category} </p>
          <img  onClick={()=>{dispatch(deleteproduct(el._id))}}  className='remove-icon' src={cross_icon}/>
          
          
















          <div className="add-prodcut">

<div className='addproduct-itemfield'>
    <p> Product Title </p>
    <input   type='text' name='name' placeholder='Type here' onChange={(event)=>{setData({...data, name:event.target.value})
  console.log(data)
  }}/>

</div>
<div className='addproduct-itemfield'>
    <p> Product Description</p>
    <input    type='text' name='description' placeholder='Type here' onChange={(event)=>{setData({...data, description:event.target.value})
  console.log(data)
  }}/>

</div>
<div className='addproduct-price'>
<div className='addproduct-itemfield'>
    <p> Price </p>
    <input   type='text' name='old_price'  placeholder='Type here' onChange={(event)=>setData({...data, old_price:event.target.value})}/>

</div>
<div className='addproduct-itemfield'>
    <p>Offre  Price </p>
    <input  type='text' name='new_price' placeholder='Type here' onChange={(event)=>setData({...data, new_price:event.target.value})}/>

</div>
</div>
<div className='addproduct-itemfield'>
    <p>Product categeory </p>
    <select   name='categeory ' className='add-product-selector' onChange={(event)=>setData({...data, category:event.target.value})}>
<option value="women"> women </option>
<option value="men"> men </option>
<option value="kid"> kid </option>
    </select>

</div>
<div className='addproduct-itemfield' >
<label htmlFor="file-input" className="btn-grey">
<img  src={ file?URL.createObjectURL(file):el.image } className='thmail-img'/>
{console.log(el.image)}
      </label>
      
      <input  ref={Image}   onChange={imagHandler} type='file' name='product' id='file-input' hidden/>
      </div>
<button  onClick={async()=>{
    // const product =dispatch(add_product)

    setLoading(true);
     let responseData;
     let formData = new FormData();
     formData.append("my_file", file);
    await axios.post("/upload", formData,{headers:{Accept:'application/json'}}).
      then((res)=>{setImageee(responseData=res.data.secure_url)})
  if(responseData){

    dispatch(updateproduct({id:el._id, data:{...data, image:responseData}
    }))
 }
    
    
}}
    className='add-prodcut-btn'> Update</button>





    </div>

















          </div>
          <hr/>
          </>
           
          


        ))}
      </div>
    </div>
  )
}

export default ListProduct