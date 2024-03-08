const express=require("express")
const route=express.Router();
const foodItem=require("../models/foodItemModel")

route.post("/updatefooditems",async(req,res)=>{

    if(Object.keys(req.body)==0){
        res.status(500).json({msg:"Enter Necessary data",success:false});
    }
    else{
        const foodType=req.body.foodType;
        const output=await foodItem.find({"foodType":foodType})
        if(output.length===0)
        {
            await foodItem.create(req.body)
            .then(async(data)=>{
                await res.status(200).json({msg:"successfully uploaded",details:data,success:true})
            })
            .catch(async(err)=>{
               await res.status(500).json({msg:"Getting Error while posting",success:false});
                console.log(err)
            })
    
        }
        else{
          
            const duplicate=await foodItem.find({"details.foodName":req.body.details.foodName});

            if(duplicate.length==0){
                try {
                    await foodItem.updateOne({"foodType":foodType},{$push:{
                        details:req.body.details
                    }})
                    .then(async(data)=>{
                       await res.status(200).json({msg:"successfully updated",details:data,success:true})
                    })
                    .catch(async (err)=>{
                       await res.status(500).json({msg:"Getting Error while updating",success:false});
                    })
                    
                } catch (error) {
                    console.log(error,"-------------------error-------")
                }
              

            }
            else{
               await res.status(500).json({msg:"Duplicate Entry",success:false});
            }
           
        }
    }

   
    
})




route.get("/fooditems",async(req,res)=>{
    // res.status(200).json({msg:"You are in home page"});
    await foodItem.find({})
    .then(async(data)=>{
        if(data.length===0){
            res.status(404).json({msg:"No data found",success:false});
        }
        else{
           await res.status(200).json({msg:"Successfully gatting the data",foodData:data,success:true})
        }
       
    })
    .catch(err=>{
        res.status(500).json({msg:"Getting Error",success:false});
    })

})


module.exports=route;