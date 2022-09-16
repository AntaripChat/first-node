//const { json } = require('express');
const express = require('express');

const app = express();
const PORT = 8000;
const fs = require('fs');

function getallbooks(){
    let data = fs.readFileSync('./books.json');
    return JSON.parse(data);
}

app.get('/a',(req,res)=>{
    res.writeHead(200)
    res.end('Heelo world');
});
app.get('/books',(req,res)=>{
    let books = getallbooks();
    if(books){
        res.setHeader("Content-Type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(books));
    }
})

app.listen(PORT,()=>{
    console.log('Hello world');
});