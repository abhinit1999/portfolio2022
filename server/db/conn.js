const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://portfolio2022:Portfolio2022@cluster0.ikevp8z.mongodb.net/portfolio_data")
.then(()=>
{
    console.log(`conected to mongoose !!!`)
})
.catch((e)=>
{
    console.log(e);
})