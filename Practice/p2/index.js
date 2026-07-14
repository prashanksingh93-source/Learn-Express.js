import express from 'express';
import path from 'path'

const app= express();

app.get('/',(req,res)=>{
    res.send('this is home page')
})

app.get('/about',(req,res)=>{
    res.send('this is about section')
})

app.use((req,res)=>{
res.status(404).sendFile(path.resolve('error.html'))
}
)

app.listen(3000,()=>{console.log('port at 3000')})