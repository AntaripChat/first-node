const express = require('express');
const path = require('path');
const bodypar = require('body-parser');

const app = express();
app.use(bodypar.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
})
app.post('/login',(req,res)=>{
    console.log(req.body);
    res.end(`Hello ${req.body.name}`)
})

app.listen(4000,()=>{
    console.log('Hello');
})