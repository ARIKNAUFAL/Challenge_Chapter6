const router = require('express').Router();
const { append } = require('express/lib/response');
const db = require('../config/config.json')
const {server} = require('../models');

router.get('/', (req,res) => {
  server.findAll({include:['guild']})
  .then(result => {
    // res.send(result); 
    res.render('server', {
      title: "list server",
      list: result
    })
  })
  .catch(err => {
    console.log(err);
  })
})


module.exports = router;