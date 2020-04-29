const express = require("express");
var path = require("path")
const app = express();
const port = process.env.port || 3000;

/**
 * Định nghĩa static file
 * NCPHUOC 29/04/2020
 */
app.use(express.static(path.join(__dirname,'Views')));


//#region api
app.get('/customer',(req,res)=>{
    res.send("customer controller");
});
app.get('/employee',(req,res)=>{
    res.send("employee controller")
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/Views/view/index.html'));
});
//#endregion

app.listen(port,()=>{
    console.log(`Listen on port ${port}`);
});