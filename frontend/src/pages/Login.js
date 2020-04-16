import React, { useState } from 'react';

import './Login.css'; //CSS
import logo from "../assets/logo.svg" //LOGO

import api from '../services/api'; //IMPORTANDO A CONEXAO COM API

export default function Login({ history }){

    const [username, setUsername] = useState('');

    //FUNÇÃO ASSÍNCRONA, QUE VAI SER DISPARADA QUANDO O INPUT FOR SUBMITADO
    async function handleSubmit(e){
        //TIRANDO O COMPORTAMENTO PADRÃO DO FORMULARIO
        e.preventDefault();

        //AQ TEM UM AWAIT
        const response = await api.post('/devs', { //ROTA PARA CADASTRAR DEV
            username,
        }); 

        const { _id } = response.data; //PEGANDO O ID DO USER

        //PROPRIEDADE DE REDIRECIONAMENTO
        history.push(`/dev/${_id}`); //PASSANDO O ID, PRO /devs 
    }


    return(
        <div className="login-container">

            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Logo Tindev"/>
                <input 
                    placeholder="Digite seu usuário do Github"
                    value={username} //username DO USE STATE
                    onChange={e => setUsername(e.target.value)} //e = Evento/Mudança, TARGET E VALUE QUE É O VALOR DIGITADO
                />
                <button type="submit">Enviar</button>
            </form>
            
        </div>
    );
};