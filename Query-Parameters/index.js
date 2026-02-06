const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/search', (req, res) => {
    let name=req.query.name
    let location=req.query.location
    let Class=req.query.class
  res.send(`${name} from ${location} & study in ${Class}grade`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
