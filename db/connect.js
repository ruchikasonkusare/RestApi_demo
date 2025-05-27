const mongoose= require("mongoose");

// uri="mongodb+srv://ruchikasonkusare:nXugOo3aNojHLf6s@demo.p54kkum.mongodb.net/Demo?retryWrites=true&w=majority&appName=Demo";

const connectDB=(uri)=>{
    return mongoose.connect(uri);
};


module.exports=connectDB;

