//MODEL RESPONSÁVEL PELA TABELA DE DEVS

const { Schema, model } = require("mongoose");

const DevSchema = new Schema({
    //ESTRUTURA DA TABELA DO BD
    name:{
        type: String, 
        required: true,
    },
    user:{
        type: String, 
        required: true
    },
    bio: String, //NÃO SENDO OBRIGATÓRIA, POR ISSO NÃO PASSO COMO OBJETO
    avatar:{
        type: String, 
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId, //É O TIPO DE ID DO MONGODB
        ref: 'Dev', //REFERENCIANDO OS DEVS DAQ DE DENTRO
    }],
    dislikes: [{
        type: Schema.Types.ObjectId, 
        ref: 'Dev', 
    }]
}, {
    timestamps: true, 
    //timestamps VAI CRIAR UMA COLUNA AUTOMATICA:
        //createdAt: DATA AUTOMATICA DE CRIAÇAO
        //updatedAt: DATA AUTOMATICA DE ATUALIZAÇÃO 
});

module.exports = model('Dev', DevSchema); //NOME DO ARQ, E A FUNCÃO