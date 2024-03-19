import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




export default function Login() {

  const [data,setData]=useState({email:"",password:""});
  const navigate=useNavigate();
  const formDetails = [
    {
      name:"Email Address",
      type: "email",
      placeholder: "Email Address",
      key: "email",
      "aria-describedby":"emailHelp",
      id:"exampleInputEmail1",
      value:[data.email]
    },
  
    {
      name:"Password",
      type: "password",
      placeholder: "Password",
      key: "password",
      id:"exampleInputPassword1",
      value:[data.password]
    }
  ];
  
  
  
 

const handleSubmit= async (e)=>{
  try{
    e.preventDefault();
    const res=await fetch("http://localhost:4000/login",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
    });
    let json= await res.json();
    console.log(json.success);
    if(json.success){
      alert("login successfull !");
      setData({...data,email:"",password:""});
      localStorage.setItem("authToken",json.authToken);
      localStorage.setItem("email",json.email);
    //  console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
    else{
      alert("Invalid Credentials !");
    }

    
  }
  catch(err){
    alert("Invalid Data");
    console.log(err);
  }
 


}

  return (
    <div className="container-fluid" id="login-page-outer-div">
      <div className="row" id="login-outer-row">
      <div className="col-lg-6 col-md-8 col-12" >
      <form id="login-page-form" onSubmit={handleSubmit}>
          <center>
            <h2 id="login-heading">Login Form</h2>
          </center>
          <div className="form row" id="login-form-fields">
            {formDetails.map((item) => {
              return (
                <div className="col-12 mb-3" id="form-field" key={item.key}>
                  <label for={item.id} class="form-label">{item.name}</label>
                  <input {...item} className="form-control" onChange={(e)=>{setData({...data,[e.target.type]:[e.target.value]})}}/>
                </div>
              )
            })}
            <div className="col-12" id="login-submit-button">
            <button className="btn btn-success w-100" >Login</button>
            </div>
            <div className="col-12" id="login-create-account">
                <Link to="/signup" id="login-create-account-text">Create New account</Link>
            </div>
           
          </div>
        </form>
      </div>

    </div>
    </div>
 
  );
}

