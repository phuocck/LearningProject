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
    let listCustomer = [
        {
            CustomerID: "1",
            CustomerName : "ncphuoc",
            CustomerCode: "P001",
            Phone : "0353082430"
        },
        {
            CustomerID: "2",
            CustomerName : "ncphuoc",
            CustomerCode: "P001",
            Phone : "0353082430"
        },
        {
            CustomerID: "3",
            CustomerName : "ncphuoc",
            CustomerCode: "P001",
            Phone : "0353082430"
        },
        {
            CustomerID: "4",
            CustomerName : "ncphuoc",
            CustomerCode: "P001",
            Phone : "0353082430"
        }
    ];
    res.send(listCustomer);
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