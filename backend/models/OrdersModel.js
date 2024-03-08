const mongoose=require("mongoose");
const orders=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    order:{
        type:Array,
        required:true
    }
})


const orderData=mongoose.model("order",orders);

module.exports=orderData;