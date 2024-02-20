import React, { useEffect, useRef, useState } from "react";
import "../styles/loginsingup.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { pushhh, userLogin, userRegister } from "../store/Userslice";
const LoginSingup = () => {
  const{isAuth}=useSelector(state=>state.user)
  const Navigate=useNavigate();
const {userData}=useSelector(state=>state.user)
const user=localStorage.getItem("userdata")
const user1=JSON.parse(user)
console.log("role",user1.role)

  useEffect(()=>{
    if (isAuth    ) 
    Navigate('/')

  },[isAuth])


  


  // useEffect(()=>{
  //   const user=userData
  //   dispatch(pushhh(user))
   

  // },[userData])

  const [login,setLogin]=useState("Login")
  const {error}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  const email=useRef()
  const password=useRef()
  const name=useRef()
  return (
    <div className="loginsingup">
      <div className="loginsingup-container">
        <h1> {login} </h1>
        <div className="loginsingup-fields">
          {login==="Sing Up"? <input type="text" placeholder="Your Name"  ref={name}/>:<></>}
          
          <input type="email" placeholder="Email Address" ref={email} />
          <input type="password" placeholder="Password" ref={password} />
          {error && <p style={{color:"red"}}> {error}</p> }
        </div>
        <button onClick={(event)=>{
          event.preventDefault()
          login==="Sing Up"?
          dispatch(userRegister({
          name:name.current.value,
    email:email.current.value , 
    password:password.current.value
    
})):dispatch(userLogin({
 
email:email.current.value , 
password:password.current.value

})


)}}> {user1.role==="admin" ?<Link to="/Dashbord"  />:<Link to="/"  />}  Continue</button>
        {login==="Sing Up"? <p className="loginsingup-login">
          Alredy have an account?<span onClick={()=>{setLogin("Login")}}>Login here </span>{" "}
        </p>:<p className="loginsingup-login">
          Creat an  an account?<span onClick={()=>{setLogin("Sing Up")}} >Click here </span>{" "}
        </p>}

        
        <div className="loginsingup-agree">
          <input type="checkbox" name="" id="" />
          <p> By continuing , i agree to the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
