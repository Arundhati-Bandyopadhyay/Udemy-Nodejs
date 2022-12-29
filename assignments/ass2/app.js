const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("hola");
    next();
});
app.use((req,res,next)=>{
    console.log("hola");
    res.send('<p>assignment done"</p>')
});

app.listen(8000);