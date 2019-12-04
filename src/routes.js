const express = require('express');
const AlunoController = require('./controllers/AlunoController')
const routes = express.Router();

routes.get('/', AlunoController.index);
// routes.get('/delete/:_id', AlunoController.destroy);
// routes.post('/aluno/add/', AlunoController.post);
// routes.post('/edit/:_id', AlunoController.update);


module.exports = routes;