const express = require('express')
const router = express.Router()
const userModel = require('../model/userModel')

router.get("/", async (req, res) => {
    const data = await userModel.find({})
    res.send(data)
})

router.post("/", async (req, res) => {
    const data = new userModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })
    const saveData = await data.save()
    res.status(201).json({
        code:'201',
        message:"record insert successfully...!",
        status:true,
        data:saveData,
        error:false
    })

})
router.delete("/:id", async(req, res)=> {
    const _id=req.params.id
    // console.log(userId)
  const del= await userModel.findByIdAndDelete({_id:_id})
    res.status(202).json({
        code:'202',
        message:"record deleted success...!",
        status:true,
        data:del,
        error:false
    })

})


router.put("/:id",async (req,res)=>{
    const updateId=req.params.id
    const updateData ={
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    }
    // console.log(updateId,updateData)
    const newData=await userModel.findByIdAndUpdate({_id:updateId},{$set:updateData})
    console.log(newData)
    res.status(201).json({
        code:'201',
        message:"user record updated successfully",
        status:true,
        data:updateData,
        error:false
    })
})

module.exports = router
