const express = require("express");
const app = express();
app.get('/customer',(req,res)=>{
    res.send("customer controller");
});
app.get('/employee',(req,res)=>{
    res.send("employee controller")
});
const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Listen on port ${port}`);
});