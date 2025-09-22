const express = require("express");
const router = express.Router();
const app = express()
const connectDB = require("./src/config/db")
const routes = require("./src/routers/router")

const PORT = 3000;


connectDB();


app.use(express.json());


app.use("/", routes)


app.listen(PORT, ()=> {
    console.log(`Server running in this ${PORT}`)
});