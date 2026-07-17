import express from 'express'

const app=express();
const port=3002;

app.use(express.json());

let users=[
    {id:1,name:'annu',age:'22'},
    {id:2,name:'krishna',age:'20'},
    {id:3,name:'lala',age:'12'}
];



app.get('/user',(req,res)=>{
    res.json(users);
});

app.post('/user',(req,res)=>{
    let newUser={id:Date.now(),...req.body};
    users.push(newUser);
    res.status(201).json(newUser)
})

app.put('/user/:id',(req,res)=>{
   let userID=parseInt(req.params.id);
   let index=users.findIndex(user=> user.id === userID)
   if(index== -1){
    return res.status(404).json({message:'user not found'})
   }
   users[index]={id:userID,...req.body}
   res.json(users[index]);
})

app.delete('/user/:id',(req,res)=>{
    let userID=parseInt(req.params.id);
   let index=users.findIndex(user=> user.id === userID)
   if(index== -1){
    return res.status(404).json({message:'user not found'})
   }
   users.splice(index,1);
   res.status(202).json({message:'delete successfully'})
});

app.patch('/user/:id',(req,res)=>{
   let userID=parseInt(req.params.id);
   let index=users.findIndex(user=> user.id === userID)
   if(index== -1){
    return res.status(404).json({message:'user not found'})
   }
   users[index]={...users[index],...req.body}
   res.json(users[index]);
})




app.listen(port,()=>{console.log(`server live at port ${port}`)});