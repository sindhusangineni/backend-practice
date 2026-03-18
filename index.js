const dns = require('dns')
require('dotenv').config();
dns.setServers(["1.1.1.1", "8.8.8.8"])
const express = require('express')
const StudentRoutes=require('./routes/StudentRoutes')
const app = express() 
const connectDB=require('./config/db')
app.use(express.json())    //inbuilt middleware

//MongoDB connection
connectDB()


app.get('/',(req,res)=>{
 res.send("student CRUD API running...")
})


app.use("/api",StudentRoutes)

const PORT = process.env.PORT || 4000


app.listen(PORT,()=>{
 console.log("server running on port $(PORT)")
})
