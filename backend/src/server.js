const express = require ("express"); //GERECIADOR DE ROTAS
const mongoose = require ("mongoose"); //FERRAMENTA QUE UTILIZA JS PARA SE COMUNICAR COM O BD
const cors = require("cors"); //PARA PERMITIR QUE O BACKEND SEJA ACESSADO POR QUALQUER ENDEREÇO, TIPO O REACT

const routes = require("./routes"); //IMPORTANDO A VARIAVEL DE ROTAS


const app = express();
const server = require('http').Server(app); //http JÁ É DO EXPRESS, E TO UNINDO COM SERVIDOR WEBSOCKET, FAZENDO COM Q ACEITE SOLICITAÇÃO TANTO WEBSOCKET QUANDO HTTP
const io = require("socket.io")(server); //PARA TROCA DE INFORMAÇÕES EM REAL-TIME, ENTRE O BACK E FRONTEND, E A FUNÇÃO PREPARA PRA RECEBER SOLICITAÇÕES HTTP E WEBSOCKET

const connectedUsers = {

}

io.on('connection', socket => {
    
    const { user } = socket.handshake.query; //PEGANDO O ID Q VEM DO FRONT

    console.log(user, socket.id)
    connectedUsers[user] = socket.id;

}) //TODA VEZ QUE ALGUÉM SE CONECTAR NA APLICAÇÃO PELO PROTOCOLO WEBSOCKET


mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-zpirl.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true, //PARA TIRAR O ERR, DE PASSAR PARAMETROS PELA URL
    useUnifiedTopology: true
}); //CONECTANDO COM O BANCO

//MIDLEWARE, PASSANDO INFORMAÇÕES PRO CONTROLLER
app.use((req, res, next) =>{
    req.io = io; //PASSANDO A IMPORTAÇÃO DO SOCKET.IO   
    req.connectedUsers = connectedUsers; //E OS USER LOGADOS

    return next();
})

//EXPRESS
app.use(cors());
app.use(express.json())//ISSO SERVE PARA QUE O EXPRESS ENTENDA, QUE AS REQ VIRÃO EM JSON
app.use(routes); //USANDO AS ROTAS

server.listen(3333);