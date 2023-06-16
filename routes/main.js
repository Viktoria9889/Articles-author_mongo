const path = require('path');
const express = require('express');
const fs = require('fs');


const router = express.Router();


const mongoose = require('mongoose');
const authorsModels = require('./../models/authors');

mongoose.connect('mongodb://localhost:27017');






const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);
router.get('/', (req, res) => {
    res.render(createPath('page'));

});


//додавання нового автора
router.post('/authors_data', (req, res) => {
    author = req.body;
    //console.log('author:', author)//масив авторів який формується
    authorsModels.create(author);//створення таблички в бд з авторів
});

//одержання списку авторів з бд
router.get('/authors', (req, res) => {
    const getAuthors = async () => {
        let authors = await authorsModels.find({});//вся інфо з бд про авторів
        res.json(authors);
    };
    getAuthors();

});


module.exports = router;