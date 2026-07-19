import express from 'express'
let app=express.Router()

app.get('/profile',(req,res)=>{
    res.send('this is profile')
})
export default app;