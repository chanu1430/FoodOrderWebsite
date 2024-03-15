import React, { useEffect, useState } from 'react'
import FoodItems from './FoodItems'

export default function MiddleContent() {
  
  const [foodList,setFoodList]=useState([]);
  const [search,setSearch]=useState("");

  const fetchingFoodItemsData= async () =>{
    try {
      console.log("fetching the data");
      const res=await fetch("https://foodorderwebsite.onrender.com/fooditems",{
        method:"GET",
        headers:{
          "Content-type":"application/json"
        }
      })
    
      const json=await res.json();
      setFoodList(json.foodData) 
      console.log("Successfully fetched the data");
      
    } catch (error) {
      console.log("Unable to connect to server");
      setFoodList([]) 
       fetchingFoodItemsData();
    }

  
   } ;


  useEffect(()=>{
      fetchingFoodItemsData();

  },[])
  
  return (
    (foodList.length)?


    <div className='row' id="middleContent-outer-div">
       
        <div className='col-lg-1 col-0'></div>
        <div className="col-12 col-lg-10" style={{margin:"10px 0px",backgroundColor: "#f9fafc"}}>
        <div className='col-12' >
        <input id="middleContent-search-bar"
                className="form-control me-2"
                type="search"
                placeholder="Search For Yummy Food"
                aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}
              />
        </div>
        {
       
            foodList.map((item)=>{
                return(
                    
                <div className='col-12'  key={item.foodType}>
                <h3 style={{ margin:"10px 0px -10px 0px"}}>{item.foodType}</h3><hr/>
                <div className="row" >
                      {
                        // mycontent= item.details.filter(
                        //     (data)=>{
                        //       let arr=(data.foodName.toLowerCase()===""?data:data.foodName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                        //       return(
                        //           arr
                        //       )
                        //     }
                        //   ).reverse().map((data1)=>{
                      
                            // return(
                            //   <FoodItems key={data1.foodName} itemData={data1} /> 
                                    
                            //     )
                               
                            // })
                      }
                      {
                          (( item.details.filter(
                            (data)=>{
                              let arr=(data.foodName.toLowerCase()===""?data:data.foodName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                              return(
                                  arr
                              )
                            }
                          ).reverse()).length)?( item.details.filter(
                            (data)=>{
                              let arr=(data.foodName.toLowerCase()===""?data:data.foodName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                              return(
                                  arr
                              )
                            }
                          ).reverse()).map((data1)=>{
                      
                            return(
                            <FoodItems key={data1.foodName} itemData={data1} /> 
                                  
                              )
                             
                          }):<><div><div>No Results Found</div>
                            <div><hr/></div></div></>
                      }
                     
                  </div>
               </div>
                           
                   
                    )
            })
        }
        </div>
         <div className='col-lg-1 col-0'></div>
    </div>:  <div id="outer-div-loading">
      <div class="wrapper">
          <div class="box-wrap">
              <div class="box one"></div>
              <div class="box two"></div>
              <div class="box three"></div>
              <div class="box four"></div>
              <div class="box five"></div>
              <div class="box six"></div>
          </div>
      </div>
    </div>
  )
}


