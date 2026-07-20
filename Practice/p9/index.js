import express from 'express';

const app=express();
const port=3000;

app.get('/',(req,res)=>{
     res.send('this is error handaling')
});

app.get('/fail',(req,res,next)=>{
    const err=new Error('somting went wrong');
    err.statusCode=400;
    next(err)
});

app.use((err,req,res,next)=>{
       console.log('error:',err.message);
       res.status(err.statusCode || 500).json({
         succes: false,
         message:err.message||'internal server error'
       })
})

app.listen(port,()=>{console.log(`live server port ${port}`)})