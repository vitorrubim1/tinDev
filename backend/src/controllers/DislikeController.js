const Dev = require("../models/Dev"); //MODEL

//OBJETO PARA EXPORTAÇÃO
module.exports = {
    //METÓDO DE CRIAÇÃO
    //FUNÇÃO ASSÍNCRONA, PRECISO QUE O AWAIT RESPONDA, PARA PROSSEGUIR O CÓDIGO
    async store(req, res){
        const { user } = req.headers; //DEV QUE ESTÁ DANDO DESLIKE
        const { devId } = req.params; //DEV QUE ESTÁ DANDO DESLIKADO

        //USUARIO Q TA LOGADO E DANDO DESLIKE
        const loggedDev = await Dev.findById(user);
        //USUARIO QUE ESTÁ SENDO DESLIKADO
        const targetDev = await Dev.findById(devId); 


        if(!targetDev){
            return res.status(400).json({ error: "Dev not exists!" });
        }

        //ADICIONANDO AO CAMPO DE DESLIKES DO DEV LOGADO, O ID DO DEV "ALVO"
        loggedDev.dislikes.push(targetDev._id);
        await loggedDev.save(); //PARA SALVAR AS INFORMAÇÕES
        
        return res.json(loggedDev);
    }
}