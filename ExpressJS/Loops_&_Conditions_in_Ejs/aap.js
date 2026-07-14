const express = require('express');
const path = require('path');
const app = express()
const port = 3000


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    let no=['annu','sing','king']
  res.render('index', {no: no});
});

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})