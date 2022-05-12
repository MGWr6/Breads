const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  res.render('index', 
    {
      breads: Bread
    }
  )
  //res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  res.send(Bread[req.params.arrayIndex])
})

module.exports = breads

//We will update our res.render() to pass data. The first argument for res.render() is always the name of the file inside the views folder we want to render. In this case we reference the FILE name: index
  //The second (optional) argument for res.render() is an object. We can name it and add as many keys as we want. In this case we are naming it breads: Bread
  // and example would look like this: 
  // {
  //   breads: 'data from our models',
  //   username: 'John doE',
  //   asdf: 'jkl;'
  // }