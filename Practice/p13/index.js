import express from 'express';

const app=express();
const PORT = 3000;

app.set('view engine','ejs')

//dummy data
const users =[
    {name: "Mohit",id:1,role:"Admin"},
    {name: "Ravi",id:2,role:"Editor"},
    {name: "Anita",id:3,role:"Viewer"}
]

app.get('/user/:id',(req,res)=>{
    let {id}=req.params;
    let user=users.find(u=>u.id===parseInt(id));
    res.render('user',{user})
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});