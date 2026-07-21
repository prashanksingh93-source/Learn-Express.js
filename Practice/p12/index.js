import express from 'express';
import home from './routes/route.js'

const app=express();
const port=3000;

app.set('view engine','ejs');

app.get('/',home)
app.listen(port,()=>{console.log(`server live on http://localhost/:${port}`)})