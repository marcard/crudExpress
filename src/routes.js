const express = require('express');
const BancoController = require('./controllers/BancoController')
const routes = express.Router();

routes.get('/', BancoController.get);
routes.post('/add/', BancoController.post);
routes.put('/edit/:_id', BancoController.update);
routes.delete('/delete/:_id', BancoController.destroy);

module.exports = routes;