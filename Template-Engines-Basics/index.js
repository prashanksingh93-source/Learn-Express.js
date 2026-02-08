const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let no=100;
  res.render('index',{no:no})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
