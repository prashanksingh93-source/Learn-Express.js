import { log } from 'console';
import express from 'express'
import path from 'path'

let app=express();

app.use(express.static('page')). //this use for css file work with html file

app.get('/',(req,res)=>{
    res.sendFile(path.resolve()+'/page/home.html')
})

app.listen(3000,()=>{console.log('port at 3000')})