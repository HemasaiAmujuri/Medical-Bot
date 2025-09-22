const express = require("express");
const router = express.Router();
const app = express()
const connectDB = require("./src/config/db")

const PORT = 3000;


connectDB();


app.use(express.json());


app.listen(PORT, ()=> {
    console.log(`Server running in this ${PORT}`)
});