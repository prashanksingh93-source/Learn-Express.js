import express from 'express';
import ejs from 'ejs';
const app=express();
const port=3000;

app.set('view engine', 'ejs');


//Define a simple route
// app.get('/', (req, res) => {
//   res.render('index.ejs', { title: 'Home Page', message: 'Welcome to the Home Page!' });
// });

app.get('/user/:name',(req,res)=>{
    let name= req.params.name;
    res.render('index',{title:`${name}`,message:'hello i am learning ejs'})
})


app.listen(port,()=>{console.log(`server live on port http://localhost:${port}/`)})