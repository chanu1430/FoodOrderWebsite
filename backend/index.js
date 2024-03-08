const express=require("express");
const mongoDB=require("./db")
const login= require("./Routes/login")
const signUp= require("./Routes/signUp")
const bodyParser=require("body-parser")
const orders =require("./Routes/order");
const myorders=require("./Routes/myorders")
const fooditemslist=require("./Routes/fooditemlist")
const deleteItem=require("./Routes/deleteitems")

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-with,Content-Type, Accept");
    next();
})

app.use(express.json());


//---------------------------- All routes ------------------------------\\
app.use("/",fooditemslist)
app.use("/",login);
app.use("/",signUp);
app.use("/",orders);
app.use("/",myorders);
app.use("/",deleteItem)
//-----------------------------------------------------------------------\\
const port =4000;
app.get("/",(req,res)=>{
    res.send("you are in home");
})





app.listen(port,()=>{
   console.log(`Listening on port ${port}`)
})