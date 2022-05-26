const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => {
  res.render('landing',{
    title: 'homepage'
  })
})

app.get('/index', (req,res) => {
  res.render('index',{
    title: 'admin page'
  })
})

app.use('/guild', require('./routes/guildRouter'))

app.use('/list', require('./routes/listRouter'))

app.use('/server', require('./routes/serverRouter') )

app.listen(port,() =>{
  console.log(`http://localhost:${port}`);
})