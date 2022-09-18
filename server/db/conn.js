const mongoose = require("mongoose");
const dotenv= require("dotenv")

dotenv.config({
    path:'./.env'
});
mongoose.connect(
    process.env.MONGO_URL
)
.then(()=>
{
    console.log(`conected to mongoose !!!`)
})
.catch((e)=>
{
    console.log(e);
})