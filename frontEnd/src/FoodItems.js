import React, { useContext,useState ,useEffect} from "react";
import {creatingContext,creatingStateContext} from "./context/FoodItemContext"
import { useNavigate } from "react-router-dom";

export default function FoodItems(props) {
  const navigate=useNavigate();
  const[cartName,setCartName]=useState("AddCart")
  const usingContext=useContext(creatingContext);
  const usingStateContext=useContext(creatingStateContext);
 

  useEffect(()=>{

   if(usingStateContext.length){

    usingStateContext.map((item)=>{
      if(item.foodName===props.itemData.foodName){
        return setCartName("Remove");
      }
      return 0
      
    })
   }
  },[])
 

  const handleClick = async(e)=>{
    if(localStorage.getItem("email")){
      if(cartName==="AddCart"){
        setCartName("Remove")
        const adding= usingStateContext.find((item)=>{
         return item.foodName===e.target.value
        });
  
        if(!adding){
          await usingContext({type:"ADD",data:props.itemData});
         }
      }
      // Removing items from cart functionality
      else{
        setCartName("AddCart");
        usingStateContext.map((item,index)=>{
          
          if(item.foodName===e.target.value){
            return usingContext({type:"REMOVE",index:index})
          }
          return null
        })
  
      }
  

    }
    else{
        navigate("/login");
    }

    

 }

  // let screenSize = window.screen;
  // let size = screenSize.availWidth > 600 ? "150px" : "190px";
  // // console.log(size);

  
  return (
    <div
      className=" col-12 col-sm-6 col-md-4 col-lg-3"
      key={props.itemData.foodName}
    >
      <div id="foodItem-outer-div">
        <img
          id="food-item-image"
          src={props.itemData.image}
          alt="biryani.jpg"
          style={{ height: "150px" }}
        />
        <div id="foodItem-card-content">
          <p id="foodItem-card-title">{props.itemData.foodName}</p>
          <div className="row">
            <div className="col-7">
              <p id="foodItem-card-price">Price: Rs {props.itemData.price}</p>
            </div>
            <div className="col-5" id="foodItem-btn-outerdiv">
              <button className="btn btn-success" value={props.itemData.foodName} onClick={handleClick}>{cartName}</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
