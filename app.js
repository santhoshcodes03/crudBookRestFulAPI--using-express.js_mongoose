const express=require("express");
const mongoose=require("mongoose");
const app=express();
const handle=require("./Routers/routes")


app.use(express.json())
app.use("/books", handle)


app.listen("3000", ()=>{
    console.log(`server is started RUNNING at 3000`)
})

mongoose.connect("mongodb://127.0.0.1:27017/bookStore").then(()=>{
    console.log("connected");})