const mongoose = require("mongoose");

const dbURI = "mongodb://localhost:27017/chatbot"


const connectDB  = (() => {
        mongoose.connect(dbURI);
        console.log("Mongodb Connected")
});


module.exports = connectDB;