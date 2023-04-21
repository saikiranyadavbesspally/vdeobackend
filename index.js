const express = require('express');
const cors = require('cors');
const app = new express();
const port = process.env.PORT || 4500;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log(`the port is running in http://localhost:${port}`);
})


