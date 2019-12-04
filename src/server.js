const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require('path');
const routes = require('./routes');
const server = express();

mongoose.connect('mongodb+srv://marco:lolzinho123@trabalhoflavio-aiiem.mongodb.net/Trabalho?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.json());
server.use(routes);
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '/views'));

// GET, POST, PUT, DELETE

server.listen(3000);