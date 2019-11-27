const express = require("express");
const mongoose = require("mongoose");


const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-pwpof.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(express.json())
server.set('views', path.join(__dirname, '/src/views'));
server.set('view engine', 'ejs');
server.use(routes);


// GET, POST, PUT, DELETE

server.listen(3000);