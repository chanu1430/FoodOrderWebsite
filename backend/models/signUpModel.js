const express=require("express")
const mongoose=require("mongoose");
const signUpSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        }
        ,
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
)


const signUP=mongoose.model("signUpData",signUpSchema);

module.exports=signUP
