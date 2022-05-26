const router = require('express').Router();
const { append } = require('express/lib/response');
const db = require('../config/config.json')
const {guild, server} = require('../models');

router.get('/', (req,res) => {
  guild.findAll({include:['server']})
  .then(result => {
    res.render('listguild', {
      title: "list guild",
      list: result
    })
    // res.send(result)
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/member/:name', (req,res) =>{ 
  const name = (req.params.name)    
  guild.findOne({
    where:{name},
    include:["server"],
  })  
  .then(result => {
    res.render('guild', {
      title: "guild",
      list: result
    })
    // res.send(result)
  })
  .catch(err =>{
    res.send(err)
  })
})

module.exports = router;