const express = require('express');
const app = express()
const port = 3000

app.get('/about', (req, res) => {
  let name=req.query.name
  let  age=req.query.age
  let location=req.query.location
  res.send(`Hello World! ${name} your age=${age} r u from ${location}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})



//http://localhost:3000/about?name=annu&age=22&location=india