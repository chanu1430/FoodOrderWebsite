import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';


export default function SignUp() {
  const [data,setData]=useState({username:"",email:"",password:""});
  let navigate=useNavigate();

  const formDetails = [
    {
        name:"username",
        type:"text",
        placeholder:"Enter Username",
        key:"userName",
        id:"exampleInputUser",
        value:[data.username]
    },
    {
      name:"email",
      type: "text",
      placeholder: "Email Address",
      key: "email",
      "aria-describedby":"emailHelp",
      id:"exampleInputEmail1",
      value:[data.email]
    },
    {
      name:"password",
      type: "password",
      placeholder: "Email Password",
      key: "password",
      id:"exampleInputPassword1",
      value:[data.password]
    }
  ];
  
  const handleSubmit= async(e)=>{
    console.log(data);
    try{
      e.preventDefault();
      const res=await fetch("https://foodorderwebsite.onrender.com/signup",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(data)
      });


      const json=await res.json();
      console.log(json.success);
      if(json.success){
        alert("Successfully SignUp");
        setData({...data,username:"",email:"",password:""});
        navigate("/login")
      }
      else{
        alert("Enter Valid Credentials");
      }
     
     
    }
    
    catch(err){
      alert("Invalid Data");
      console.log(err);
    }

  }

  return (
    <div className="container-fluid" id="signup-page-outer-div">
    <div className="row" id="signup-outer-row">
    <div className="col-lg-6 col-md-8 col-12" >
    <form id="signup-page-form" onSubmit={handleSubmit}>
        <center>
          <h2 id="signup-heading">SignUp Form</h2>
        </center>
        <div className="form row" id="signup-form-fields">
          {formDetails.map((item) => {
            return (
              <div className="col-12 mb-3" id="form-field" key={item.key}>
                <label for={item.id} class="form-label">{item.name}</label>
                <input {...item} className="form-control" onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}}/>
              </div>
            )
          })}
          <div className="col-12" id="signup-submit-button">
          <button className="btn btn-success w-100">SignUp</button>
          </div>
          <div className="col-12" id="signup-create-account">
              <Link to="/login" id="signup-create-account-text">Already Have Account</Link>
          </div>
         
        </div>
      </form>
    </div>

  </div>
  </div>
  )
}
