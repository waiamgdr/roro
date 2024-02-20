import React from "react";
import AddProduct from '../../Components/AddProduct/AddProduct'
import Alluser from '../../Components/Allusers/Alluser'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Admin.css'
import{Routes,Route} from 'react-router-dom'
import Dashbord from "../../Dashbord"
const Admin = () => {
  return (
    <div  className="admin">

 <Sidebar/>
<Routes>

    
    <Route  path='/addproduct' element={<AddProduct/>}/>
    <Route  path='/listproduct' element={<ListProduct/>}/>
    <Route  path='/alluser' element={<Alluser/>} />

    
</Routes>



    </div>
  )
}

export default Admin