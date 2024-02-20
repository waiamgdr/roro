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
<label htmlFor='file-input'>
<img  src={ images?URL.createObjectURL(images):upload_area } className='thmail-img'></img>
</label>
<input  ref={Image}   onChange={imagHandler} type='file' name='product' id='file-input' hidden/>


</div>
<button  onClick={handleUpload}className='add-prodcut-btn'> ADD</button>












dispatch(updateproduct({_id:el._id, data:{
    name:Name.current.value , 
      description:Description.current.value,
      image:responseData.image_url, 
      new_price:Newprice.current.value,
      old_price:Oldprice.current.value,
      category:Category.current.value}
}))