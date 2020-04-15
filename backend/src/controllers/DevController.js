const axios = require("axios"); //AXIOS PARA FAZER REQUISIÇÕES EM API EXTERNAS 
const Dev = require("../models/Dev"); //MODEL

//OBJETO PARA EXPORTAÇÃO
module.exports = {
    
    //METÓDO DE LISTAGEM
    //FUNÇÃO ASSÍNCRONA, PRECISO QUE O AWAIT RESPONDA, PARA PROSSEGUIR O CÓDIGO
    async index(req, res){

        const { user } = req.headers; //BUSCANDO O USUÁRIO LOGADO

        //AQ TEM O await
        const loggedDev= await Dev.findById(user); //AQ PEGO AS INFO DO USER LOGADO

        //FILTROS PARA QUE NÃO APAREÇA O PRÓPRIO USUARIO, OS USER Q ELE JA DEU LIKE E DESLIKE
        //AQ TEM O await
        const users = await Dev.find({
            //$and TEM QUE PASSAR POR TODOS, E NÃO SOU POR UM COMO || OU AND
            $and: [
                { _id: { $ne: user } }, //$ne: NOT EQUAL, NAO PODENDO LISTAR ELE MESMO
                { _id: { $nin: loggedDev.likes } }, //$nin: NÃO ESTEJA EM UMA LISTA, NESSE CASO DE LIKES
                { _id: { $nin: loggedDev.dislikes } }, //$nin: NÃO ESTEJA EM UMA LISTA, NESSE CASO DE DISLIKES
            ],
        });

        return res.json(users);
    },

    //METÓDO DE CRIAÇÃO
    //FUNÇÃO ASSÍNCRONA, PRECISO QUE O AWAIT RESPONDA, PARA PROSSEGUIR O CÓDIGO
    async store(req, res){
        //REQUISIÇÃO
        const { username } = req.body; //DESESTRUTURAÇÃO

        //AQ TEM O await, ENTÃO TEMQ ESPERAR ISSO CARREGAR PARA PROSSEGUIR
        const userExists = await Dev.findOne({ user: username })  //findOne METÓDO DO MONGOOSE 

        if(userExists){
            //SE O USER JA EXISTIR EU RETORNO OQ JÁ TEM AO INVÉS CRIAR UM NOVO
            return res.json(userExists);
        }

        //AQ TEM O await
        const response = await axios.get(`https://api.github.com/users/${username}`);

    
        //AQUI EU BUSCO DA API DO GITHUB, ESSAS INFO
        const { name, bio, avatar_url: avatar } = response.data; //DESESTRUTURAÇÃO

        //AQ TEM O await
        const dev = await Dev.create({ 
            name, 
            user: username, 
            bio,
            avatar
         });

        return res.json(dev);
    }
};
