const router = require('express').Router();
const { append } = require('express/lib/response');
const db = require('../config/config.json')
const {player} = require('../models');

router.get('/', (req,res) => {
  player.findAll({include:["guild"]})
  .then(result => {
    // res.send(result);
    res.render('list', {
      title: "list",
      list: result
    })
  })
  .catch(err => {
    console.log(err);
  })
})

router.post('/', (req,res) => {

  let {name, email} = req.body;

  player.create({
    name,
    email,
  })
  .then(result =>{
    res.redirect('/list')
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/delete/:id', (req,res) => {
  player.findAll()
  .then(result => {
    player.destroy({
      where:{
        id: req.params.id
      }
    })
  })
  res.redirect('/list')
})

router.get('/:name', (req,res) =>{ //kalo endpoint NAME params harus NAME
  const name = (req.params.name)    //kalo ID params harus ID
  player.findOne({
    include:["guild"],
    where:{name}
  })  
  .then(result => {
    res.render('player', {
      title: "player",
      list: result
    })
  })
  .catch(err =>{
    res.send(err)
  })
})

router.get('/:name/edit', (req,res) =>{ //kalo endpoint NAME params harus NAME
  const name = (req.params.name)    //kalo ID params harus ID
  player.findOne({
    where:{name}
  })  
  .then(result => {
    res.render('playerEdit', {
      title: "edit",
      list: result
    })
  })
  .catch(err =>{
    res.send(err)
  })
})

router.post('/update/:name', (req,res) => { 
  // res.send(req.body)
  player.findAll()
  .then(result => {
    player.destroy({
      where:{
        name: req.params.name
      }
    })
    player.create(req.body)
    res.redirect('/list')
  })
  .catch(err => {
      console.log(err);
  })
})

module.exports = router;