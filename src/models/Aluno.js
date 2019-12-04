const {Schema, model} = require('mongoose');

const AlunoSchema = new Schema({
    name: String,
    data_nasc: Date,
    ra: Number,
    photoPath: String,
});

module.exports = model("Aluno", AlunoSchema)