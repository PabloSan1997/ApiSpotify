const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./config/mongo");
require("dotenv").config();
const app = express();
app.use(cors());
const PUERTO = process.env.PORT;

app.get("/", (req, res)=>{
    res.json({message:"hola"});
});

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`);
});

dbConnect();