const mongoose=require("mongoose");
 
const URI="mongodb+srv://chanakya:chanu001@cluster0.ef7698b.mongodb.net/MernProject?retryWrites=true&w=majority";

const mongoDB=mongoose.connect(URI)
.then(()=>{
    console.log("Successfully connected to Database");
}).catch((err)=>{console.log(err)})


module.exports=mongoDB;