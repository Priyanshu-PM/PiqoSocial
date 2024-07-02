const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


url="mongodb+srv://priyanshumahukhaye:OKzsaUDVOBsTpJEc@cluster0.jwn9zmp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(url , (err)=>{
if (err)
{
    console.log(err)
}
else
{
    console.log("connected Success")
}

} )
