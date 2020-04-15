const express = require ("express"); //GERECIADOR DE ROTAS
const mongoose = require ("mongoose"); //FERRAMENTA QUE UTILIZA JS PARA SE COMUNICAR COM O BD
const cors = require("cors"); //PARA PERMITIR QUE O BACKEND SEJA ACESSADO POR QUALQUER ENDEREÇO, TIPO O REACT

const routes = require("./routes"); //IMPORTANDO A VARIAVEL DE ROTAS


const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-zpirl.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true, //PARA TIRAR O ERR, DE PASSAR PARAMETROS PELA URL
    useUnifiedTopology: true
}); //CONECTANDO COM O BANCO

server.use(cors());
server.use(express.json())//ISSO SERVE PARA QUE O EXPRESS ENTENDA, QUE AS REQ VIRÃO EM JSON
server.use(routes); //USANDO AS ROTAS

server.listen(3333);