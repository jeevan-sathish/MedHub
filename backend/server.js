const express = require("express");
const cors = require("cors");
const port = 3000;

const app =express()

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("success sent by get");
})

app.listen(port,()=>{
    console.log(`running server succefully at http://localhost:${port}`);
})