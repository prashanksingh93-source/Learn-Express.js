import express, { json } from 'express'

const app=express();
const port=3000;

app.set('view engine','ejs');


app.get('/',async (req,res)=>{
     let Url=await fetch('https://jsonplaceholder.typicode.com/posts')
     let data= await Url.json()
     //console.log(data);
     res.render('index',{data})

})

app.listen(port,()=>{console.log(' server live ')})