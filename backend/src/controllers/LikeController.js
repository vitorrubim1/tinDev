const Dev = require("../models/Dev"); //MODEL

//OBJETO PARA EXPORTAÇÃO
module.exports = {
    //METÓDO DE CRIAÇÃO
    //FUNÇÃO ASSÍNCRONA, PRECISO QUE O AWAIT RESPONDA, PARA PROSSEGUIR O CÓDIGO
    async store(req, res){
        const { user } = req.headers; //DEV QUE ESTÁ DANDO LIKE
        const { devId } = req.params; //DEV QUE ESTÁ DANDO LIKADO

        //USUARIO Q TA LOGADO E DANDO LIKE
        const loggedDev = await Dev.findById(user);
        //USUARIO QUE ESTÁ SENDO LIKADO
        const targetDev = await Dev.findById(devId); 


        //SE O USUÁRIO "ALVO" QUE FOI LIKADO POR O loggedDev, DER LIKE, AUTOMATICAMENTE DA MATCH 
        if(targetDev.likes.includes(loggedDev._id)){
            console.log("deu match");
        }


        if(!targetDev){
            return res.status(400).json({ error: "Dev not exists!" });
        }

        //ADICIONANDO AO CAMPO DE LIKES DO DEV LOGADO, O ID DO DEV "ALVO"
        loggedDev.likes.push(targetDev._id);
        await loggedDev.save(); //PARA SALVAR AS INFORMAÇÕES
        
        return res.json(loggedDev);
    }
}