const express = require('express');
const bodyParser=require('body-parser');


const app = express();
app.use(bodyParser.urlencoded());

app.use('/',(req, res, next) => {
        console.log('this always runs!');
        
        next(); // Allows the request to continue to the next middleware in line
      });
      

app.use('/add-product',(req, res, next) => {
  console.log('In another middleware!');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product></form>');

});

app.use('/product',(req,res,next)=>{
  console.log(req.body);
res.redirect('/');
})

app.use('/',(req, res, next) => {
  console.log('In the middleware!');
  //res.send('<h1>Hello from Express!</h1>');
  //next(); // Allows the request to continue to the next middleware in line
});


app.listen(3000);
