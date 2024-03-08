const mongoose=require("mongoose");
const foodItem=new mongoose.Schema({
    foodType:{
        type:String,
        // required:true
    },
    foodName:{
        type:String,
        required:true 
    },
    image:{
        type:String,
       // required:true
    },
    price:{
        type:Number,
       // required:true
    },
    calories:{
        type:Number

    },
    protein:{
        type:String
    }
})

const foodList=new mongoose.Schema({
    foodType:{
        type:String,
        required:true
    },
    details:[foodItem]

})


const foodItemList=mongoose.model("FoodItemList",foodList);

module.exports=foodItemList;
