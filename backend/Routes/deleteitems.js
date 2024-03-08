const express = require("express");
const route = express.Router();
const deleteData = require("../models/foodItemModel");

route.post("/deleteitem", async (req, res) => {
  if (Object.keys(req.body) == 0) {
    res.status(500).json({ msg: "Enter Necessary data", success: false });
  } else {
    try {
      const out = await deleteData.find({
        "details.foodName": req.body.foodName,
      });
      if (out.length === 0) {
        res.status(500).json({ msg: "Invalid Input Data", success: false });
      } else {
        await deleteData
          .updateOne(
            { "details.foodType": req.body.foodType },
            {
              $pull: {
                details: {
                  foodName: req.body.foodName,
                  foodType: req.body.foodType,
                },
              },
            }
          )
          .then(async (data) => {

            
            await res
              .status(200)
              .json({
                msg: "Deleted Document Successfull",
                success: true,
                details: data,
              });
          })
          .catch(async (err) => {
            console.log(err, "--------------------error-------------------");
            await res
              .status(500)
              .json({ msg: "Getting error inside try", success: false });
          });
      }
    } catch (error) {
      console.log(error, "--------------------error-------------------");
      await res
        .status(500)
        .json({ msg: "Getting error inside catch", success: false });
    }
  }
});

route.get("/deleteitem", (req, res) => {
  res.status(200).json({ msg: "you are in delete Page", success: true });
});
module.exports = route;
