const express = require ("express");
const DevController = require("./controllers/DevController"); //IMPORTANDO O CONTROLLER DEV
const LikeController = require("./controllers/LikeController"); //IMPORTANDO O CONTROLLER DE LIKE
const DislikeController = require("./controllers/DislikeController"); //IMPORTANDO O CONTROLLER DE LIKE

const routes = express.Router(); //DESACOPLANDO O METÓDO DE ROTAS EM UMA VARIAVEL

//ROTA PARA MOSTRAR OS DEVS
routes.get("/devs", DevController.index); //INDEX: METÓDO DE LISTAGEM

//ROTA PARA CRIAÇÃO DE DEVS
routes.post("/devs", DevController.store); //STORE: METÓDO DE CRIAÇÃO

//ROTA PARA DAR LIKE EM DEVS
routes.post("/devs/:devId/likes", LikeController.store); //STORE: METÓDO DE CRIAÇÃO

//ROTA PARA DAR DISLIKE EM DEVS
routes.post("/devs/:devId/dislikes", DislikeController.store); //STORE: METÓDO DE CRIAÇÃO

module.exports = routes;