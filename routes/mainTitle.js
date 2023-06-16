const path = require('path');
const fs = require('fs');
const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const titleModels = require('../models/title');

mongoose.connect('mongodb://localhost:27017');


const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);
//рендеримо нашу сторінку
router.get('/add-title', (req, res) => {
  res.render(createPath('pageTitle'));
});


// додавання нової статті
router.post('/articles_data', (req, res) => {
  article = req.body;
  titleModels.create(article);
  console.log('article:', article);
  //titleCreate()
});




module.exports = router;