const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let user=["Annu","lala","kala"]
  res.render('index',{user: user})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
