const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!,get request1')
})
app.post('/', (req, res) => {
    console.log(req.body)
  res.send('Hello World!, post request')
})

app.put('/', (req, res) => {
  res.send('Hello World!,put request')
})

app.delete('/', (req, res) => {
  res.send('Hello World!,delete request')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
