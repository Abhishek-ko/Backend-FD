const express = require('express');

const { json } = require("express");

const app = express();

app.use(express.json());

const logger = (req, res, next) => {
console.log("request received on /sum");
next();
} 
app.post("/sum", logger , (req, res) => {
    res.send("hi");
      
})

app.listen(3000, ()=> {
    console.log("server running");
    
})
