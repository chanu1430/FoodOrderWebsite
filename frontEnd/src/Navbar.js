import React from "react";
import {Link} from "react-router-dom";

const handleAuthToken=()=>{
  localStorage.removeItem("authToken");
  localStorage.removeItem("email")
}


export default function Navbar() {

  return (
    <div className="row sticky-top" id="navbar-outer-div">
      
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img src="images/logo/logo.png" alt="website logo" style={{height:"50px",width:"100px",objectFit:"cover"}}/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#middleContent-outer-div">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                 
                <Link className="nav-link active" aria-current="page" to={(localStorage.getItem("authToken"))?"/myOrders" :"/login"}>
                  My Orders
                </Link>
              </li>
              {

                (localStorage.getItem("email")==="Chanakya@gmail.com")?
                 <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Admin">
                        Admin
                    </Link>
                 </li>:""

              }

            </ul>
            <div className="d-flex">
              <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" >

                  {(localStorage.getItem("authToken")) ?
                    <Link className="nav-link" to="/cart" style={{color:"black"}}>Cart</Link>: 
                    <Link className="nav-link" to="/login" style={{color:"black"}}>LogIn</Link>}

                </li>
                <li className="nav-item">
                  {(localStorage.getItem("authToken")) ?
                  <Link className="nav-link" to="/login" onClick={handleAuthToken} style={{color:"red"}}>LogOut</Link>: 
                  <Link className="nav-link" to="/signup" style={{color:"black"}}>SignUp</Link>}
                 
                </li>
              </ul>

            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
