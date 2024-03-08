const express=require("express");
const route=express.Router();
const order=require("../models/OrdersModel")


route.post("/myorders",async (req,res)=>{

    try {

    const output=await order.findOne({"email":req.body.email})
    .then(async(data)=>{
        if(data===null){
            await res.status(200).json({msg:"you are in orders page",success:true,item:[]});
        }
        else{
            const arr=data.order.reverse();
            await res.status(200).json({msg:"you are in orders page",success:true,item:arr});
        }
    })
    .catch(err=>{
         res.status(500).json({msg:"invalid data inside try",success:false})
    })
       
    }
    catch (error) {
        res.status(500).json({msg:"invalid data inside catch",success:false})
    }
   
})


route.get("/myorders",(req,res)=>{
    res.status(200).json({msg:"you are in myorders page"})
})



module.exports=route;