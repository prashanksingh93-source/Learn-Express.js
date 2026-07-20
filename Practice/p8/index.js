import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import ratelimit from 'express-rate-limit'

const port=3000;
const app=express();
app.use(morgan('dev'));
app.use(cors());

const limiter= ratelimit({
    windowMs: 2*60*1000,  //2minute
    max: 3,
    message:'limit reach',
    standardHeaders:true,
    legacyHeaders:false
})

app.get('/',limiter,(req,res)=>{
    res.send('this is 3rd party middleware')
})

app.get('/api/data',(req,res)=>{
    res.json({message:'this is json data'})
})
app.listen(port,()=>{console.log(`server live port ${port}`)})