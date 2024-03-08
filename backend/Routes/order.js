const express=require("express");
const route=express.Router();
const order=require("../models/OrdersModel");

let i=0;
route.post("/orders",async(req,res)=>{

  
    try {

        const email=req.body.email;

        const output= await order.findOne({email:email})
        if(output===null)
        {
            const data=req.body.data;
            await order.create({
                email:req.body.email,
                order:[{order_date:req.body.date,order_data:data}]
            })
            .then((data)=>{
               console.log(data);
                if(data){
                
                    res.status(201).json({msg:"successfully data saved",success:true,details:data});
                }
                else{
                    res.status(500).json({msg:"Data Not Saved",success:false});
                }
            
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json({msg:"invalid data inside try",success:false})
            })
            
        }
        else{
            await order.updateOne({email:email},{$push:{
                order:{"order_date":req.body.date,"order_data":req.body.data}

            }}
            
            )
            res.status(200).json({msg:"successfully updated",success:true})
        }
        
    } 
    catch (error) {
        res.status(500).json({msg:"invalid data inside catch",success:false})
    }


})

route.get("/orders",(req,res)=>{
    res.status(200).json({msg:"you are in orders page"})
})


module.exports=route;