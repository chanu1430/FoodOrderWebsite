import React, { useContext } from 'react'
import { creatingContext, creatingStateContext } from './context/FoodItemContext';
import { Link } from 'react-router-dom';
export default function Cart() {

  let cartItems=useContext(creatingStateContext);
  let cartDispatchItems=useContext(creatingContext);


  console.log(cartItems);
 const handleRemove= async (e)=>{
    const index=e.target.value;
    await cartDispatchItems({type:"REMOVE",index:index})

 }

const handleCheckout= async()=>{
  const d=new Date();
  const date=`${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

  const email=localStorage.getItem("email");

  const res= await fetch("https://foodorderwebsite.onrender.com/orders",{

   method:"POST",
   headers:{
        "Content-type":"application/json"
      },

  body:JSON.stringify({
    email:email,
    data:[...cartItems],
    date:date
  })

  });


  console.log("data saved")

  const json= await res.json();
  if(json.success){
     console.log(json) ;
      cartDispatchItems({type:"DROP"});
      console.log("data dropped")
  }




}

  return (
    <div className='container'>
        <div className='row'>
          <div className='col-3 col-lg-2 pt-2 pb-2' ></div>
          <div className='col-6 col-lg-8 pt-2 pb-2' ><center><h4>My Cart</h4></center></div>
          <div className='col-3 col-lg-2 pt-2 pb-2' ><center><Link to="/"><button className='btn btn-success'>GoBack</button></Link></center></div>
          <hr />
          <div className='col-12' >
          <div  className='row' > 
            {
             
              (cartItems.length)?
              cartItems.map((item,index)=>{

                return(
                 
                  <div  key={index} className='col-12 col-lg-6' >
                    <div className='row' style={{"box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"7px 0px",margin:"10px 0px",borderRadius:"10px 0px"}}>
                    <div className='col-6 col-lg-5'>
                      <img  src={item.image} alt="i1.jpg" style={{margin:"0px",height:"100px",width:"100%",objectFit:"cover",borderRadius:"6px 0px"}}/>
                    </div>
                    <div className='col-6 col-lg-7'
                    //  style={{borderRight:"1px solid grey"}}
                     >
                      <div className='row'  id="cart-details">
                        <h6 className='col-12'>{item.foodName}</h6>
                        <div className='col-6'>
                            <p>Type: {item.foodType}</p>
                            <p>Price: ₹{item.price}</p>
                        </div>
                        <div className='col-6' 
                        style={{display:"flex",alignItems:"center",justifyContent:"center"}}
                        >
                      <button className='btn btn-danger w-100' id="cart-remove-btn" value={index} onClick={handleRemove} style={{margin:"0px 0px -5px 0px",padding:"-10px 0px"}}>Remove</button>
                    </div>
                    
                      </div>
                     
                      
                    </div>
                    {/* <div className='col-12 col-lg-3' style={{padding:"8px 9px",display:"flex",alignItems:"center",justifyContent:"right"}}>
                      <button className='btn btn-danger w-100' id="cart-remove-btn" value={index} onClick={handleRemove} style={{margin:"0px 0px -5px 0px",padding:"-10px 0px"}}>Remove</button>
                    </div> */}
                    </div>
                  </div>
                    
                   

                 
                )
              
              })
              :<div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"70vh"}}>
                <img src='images/cart/empty-cart-ipack.webp' alt='No Items' style={{height:"300px",objectFit:"cover"}}/>
                
              </div>

            }
           </div>

          </div>
          {(cartItems.length)?
            <div className='col-12'><button style={{marginTop:"30px"}} className='btn btn-success' onClick={handleCheckout}>Checkout</button></div>
     :<></>
          }

             </div>

    </div>
  )
}
