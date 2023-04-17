const express=require('express')
const app=express()
const port=process.env.PORT || 7080
const dbConnection=require('./db')
const router=require('./routes/userRoute')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/user",router)

app.listen(port,()=>{
    console.log("server started...!")
    dbConnection()
})

