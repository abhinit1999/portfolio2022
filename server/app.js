const express = require("express");
// const { use } = require("marked");
require("./db/conn");
const cors = require("cors");

const user = require("./model/user");
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());


app.use(cors());
app.get("/",(req,res)=>
{
    res.send("Welcome to Home Page !!!")
})


// create new User
app.post("/user",(req,res)=>
{
    // console.log(req.body);
    const newUser  =new user(req.body);
    newUser.save();
    res.send(newUser);
    console.log(`\nData inserted !!!`);

}) 



app.listen(port,()=>
{
    console.log(`server runing at: ${port}`);
})