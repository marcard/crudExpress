const Aluno = require('../models/Aluno')

module.exports = {
    async index(req, res){
        const alunos = await Aluno.find();
        if(alunos != "" ){
            res.render('index', {'Alunos': alunos} );
        } else {
            res.render('index', {'Alunos': "" });
        }
    },
    save(req, res) {
        const {  } = req.body;
    }
}