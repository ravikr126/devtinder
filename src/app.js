const express= require('express')
const app= express()

// app.use((req,res)=>{
//     res.send("Hello from the server")
// })

app.use("/hello",(req,res)=>{
    res.send("Hello ")
})

app.use("/master",(req,res)=>{
    res.send("Hello master")
})

app.listen(3000,()=>{
    console.log("sercer is sucessfully run on port 3000")
})