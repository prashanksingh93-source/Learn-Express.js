import express from 'express'
// import path from 'path'

const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('home page')
})
app.post('/about',(req,res)=>{
    const {item}=req.body;
    res.send(`this item is ${item}`)
})
app.listen(3000,()=>{console.log('server port at 3000')})