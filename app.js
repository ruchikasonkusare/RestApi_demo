require("dotenv").config();
const express= require("express");
const app = express();

const connectDB=require("./db/connect")

const PORT=process.env.PORT || 5000;

const product_routes=require("./routes/productroutes");

app.get("/",(req,res)=>{
    res.send("I am live");
});

app.use("/api/products",product_routes);

const start=async()=>{
    
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT,()=>{
            console.log(`Sucessfull on port ${PORT}`)
        });
    }
    catch(error){
        console.log(error);
    }

};


start();