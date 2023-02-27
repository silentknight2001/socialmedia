
const express = require("express")
require('dotenv').config() 

const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const app = express();
const Authroute = require("./Routes/Authroute")
const UserRoute = require("./Routes/userRoute")
const PostRout = require("./Routes/PostRoute")





//Routes


//middleware
app.use(bodyparser.json({limit:"30mb", extended:true}))
app.use(bodyparser.urlencoded({limit:"30mb", extended:true}))
//depreciation error
mongoose.set('strictQuery', true);

//DB connection
mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>app.listen(process.env.PORT, ()=> console.log(`MongoDB listening :${process.env.PORT}`))).catch((error)=>console.log(error)
);



app.use("/auth",Authroute)
app.use("/user",UserRoute)
app.use("/post", PostRout)



