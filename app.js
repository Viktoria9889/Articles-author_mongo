const express = require('express');
const server  = express();
const mongoose = require('mongoose');
const titleModels = require('./models/title');

mongoose.connect('mongodb://localhost:27017');



const mainRoute = require('./routes/main')
const mainTitleRoute = require('./routes/mainTitle')
const mainViewRoute = require('./routes/mainView')



server.set('views', __dirname + '/views')
server.use(express.static(__dirname + '/public'))



server.use(express.json())

server.use('/', mainRoute)
server.use('/', mainTitleRoute)
server.use('/', mainViewRoute)

server.listen(4000)