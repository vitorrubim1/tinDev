import React, { useState } from 'react';

import './Login.css'; //CSS
import logo from "../assets/logo.svg" //LOGO

export default function Login({ history }){

    const [username, setUsername] = useState('');

    //FUNÇÃO QUE VAI SER DISPARADA QUANDO O INPUT FOR SUBMITADO
    function handleSubmit(e){
        //TIRANDO O COMPORTAMENTO DO FORMULARIO
        e.preventDefault();

        //PROPRIEDADE DE REDIRECIONAMENTO
        history.push("/main");
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