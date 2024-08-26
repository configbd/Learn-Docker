const express = require("express")
const app=express()

const PORT=process.env.PORT || 8000;

app.get('/',(req,res)=>{
    return res.json({message:"Hey I am from NodeJS server in containr"})
})

app.listen(PORT,()=>{
    console.log(`Server Started on PORT ${PORT}`)
})