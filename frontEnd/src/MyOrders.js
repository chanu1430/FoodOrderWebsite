import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function MyOrders() {
  let number = 0;
  let totalPrice = 0;
  const [myOrder, setMyOrder] = useState([]);
  const email = localStorage.getItem("email");
  const fetching = async () => {
    const res = await fetch("https://foodorderwebsite.onrender.com/myorders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email
      }),
    });
    const json = await res.json();
    setMyOrder(json.item);
  };

  useEffect(() => {
    if (email) {
      fetching();
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 col-lg-2 pt-2 pb-2"></div>
        <div className="col-6 col-lg-8 pt-2 pb-2">
          <center>
            <h4>My Orders</h4>
          </center>
        </div>
        <div className="col-3 col-lg-2 pt-2 pb-2">
          <center>
            <Link to="/">
              <button className="btn btn-success">GoBack</button>
            </Link>
          </center>
        </div>
        <hr />
       
        <div className="col-12" style={{border:"3px solid #198754",borderRadius:"10px","padding-top":"20px","padding-bottom":"20px",backgroundColor:"#f0faf5"}}>
          <table class="table" style={{backgroundColor:"#f0faf5"}}>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Food Name</th>
                <th scope="col">Food Type</th>
                <th scope="col">Price</th>
                <th scope="col">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {myOrder.map((item) => {
                return item.order_data.map((data) => {
                  number++;
                  totalPrice = totalPrice + data.price;
                  return (
                    <tr key={data.foodName}>
                      <th scope="row">{number}</th>
                      <td>{data.foodName}</td>
                      <td>{data.foodType}</td>
                      <td>{data.price}</td>
                      <td>{item.order_date}</td>
                    </tr>
                  );
                });
              })}
            <tr>
                      {/* <th scope="row"></th> */}
                      <th>Total Price:</th>
                      <td></td>
                      <td></td>
                      <th>{totalPrice}</th>
                      <td></td>
                      
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}





 {/* <div className="col-12">
          <div className="row">
            <div className="col-12">
              <div className="row">
                
                <div className="col-xs-12 col-lg-1">Number</div>
                <div className="col-xs-12 col-lg-3">Food Item Name</div>
                <div className="col-xs-12 col-lg-3">Food Item Type</div>
                <div className="col-xs-12 col-lg-2">Price</div>
                <div className="col-xs-12 col-lg-3">Date & Time</div>
              </div>
            </div>
          </div>
          {myOrder.map((item) => {
            return (
              <div className="row">
                <hr />

                {item.order_data.map((data) => {
                    number++;
                    totalPrice=totalPrice+data.price;
                  return (
                    <div className="col-12">
                      <div className="row">
                      <div className="col-xs-12 col-lg-1">{number}</div>
                        <div className="col-xs-12 col-lg-3">
                          {data.foodName}
                        </div>
                        <div className="col-xs-12 col-lg-3">{data.foodType}</div>
                        <div className="col-xs-12 col-lg-2">{data.price}</div>
                        <div className="col-xs-12 col-lg-3">
                          {item.order_date}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}


          <hr/>
          <div className="row">
            <div className="col-12">Total Price: {totalPrice}</div>
          </div>
        </div> */}
