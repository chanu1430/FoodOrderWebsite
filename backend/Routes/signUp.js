const express=require("express");
const route=express.Router();
const signUp=require("../models/signUpModel");
const bcrypt=require("bcryptjs");


route.post("/signup", async(req,res)=>{
    try{
        if(Object.keys(req.body).length==0){
            console.log("No Data Entered")
            res.status(500).json({msg:"NO data entered",success:false,body:req.body});
        }

        else{
            const userData=req.body;
            // const salt= await bcrypt.genSalt(10);
            // const encPass=await bcrypt.hash(userData.password,salt);
            // await signUp.create({...userData,password:encPass})
            await signUp.create(userData)
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
        

    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:"invalid data inside catch",success:false})
    }
})


route.get("/signup",(req,res)=>{
    res.send("you are in signup page")
})


module.exports=route;