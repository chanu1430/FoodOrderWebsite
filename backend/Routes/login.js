const express=require("express");
const route=express.Router();
const login=require("../models/signUpModel")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const jwtSecret="dontTrytoAccessMyWebsite$$$$####"

route.post("/login",async (req,res)=>{
    try{

      
        if(Object.keys(req.body)==0){
            console.log("No Data Entered")
            res.status(500).json({msg:"NO data entered",success:false});
        }
        else{
            const input=req.body;
        
            await login.findOne(input)
            .then(async (data)=>{
                console.log(data)
              //  const pwdCmpr=  bcrypt.compare(input.password,data.password)
            
               
                if(input.password=data.password){

                    console.log("Login Successfull!")
                    
                    const userData={
                        user:{
                            id:data._id
                        }
                    }
                    const jwtToken=await jwt.sign(userData,jwtSecret)
                    return res.status(200).json({msg:data,success:true,authToken:jwtToken,email:data.email});
                }
                else{
                    console.log("Invalid Crredentials")
                    res.status(404).json({msg:"Invalid Data",success:false})
                }
            }

            ).catch(e=>{
                console.log(e);
                res.status(500).json({msg:"invalid data inside try",success:false})
            })
            }
            
       

    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:"invalid data inside catch",success:false})
    }
    
})



route.get("/login",(req,res)=>{
    res.send("you are in login page")
})


module.exports=route;