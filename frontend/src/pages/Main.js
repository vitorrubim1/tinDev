import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom'; //ANCORA

import './Main.css'; //css

import api from '../services/api'; //CONEXAO DA API

import logo from '../assets/logo.svg'; //LOGO IMAGE
import like from '../assets/like.svg'; //LIKE IMAGE
import dislike from '../assets/dislike.svg'; //DISLIKE IMAGE

export default function Main({ match }){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        //FUNÇÃO ASSÍNCRONA
        async function loadUsers(){
            //AQ TEM UM AWAIT
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id //ID DO USER, QUE VEM PELO HEADER DO PARAMS
                }
            })
            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id]) //TODA VEZ QUE UM USER LOGAR, O useEffect É RESTARTADO
    
    //FUNÇÃO ASSÍNCRONA DE LIKE
    async function handleLike(id){ //AQ É O ID DE QUEM ESTÁ DANDO LIKE
        //AQ TEM UM AWAit
        await api.post(`/devs/${id}/likes`, null, {//SEGUNDO PARAMETRO NULO, PQ É ALI QUE VAI O CORPO, E SO PRECISAMOS DO HEADER
            headers: { user: match.params.id } //ID DE QUEM ESTÁ DANDO DISLIKE
        })

        //PARA RECARREGAR, CASO O USER ONLINE, DÊ DISLIKE EM QUALQUER UM DA LISTA
        setUsers(users.filter(user => user._id !== id));
        //EU FAÇO UM FILTRO ATRAVÉS DO ID DO USUARIO QUE ESTÁ ON, E VEJO SE ALGUM ID DA LISTA ESTA NA LISTA DE DISLIKES DELE
    }

    //FUNÇÃO ASSÍNCRONA DE DISLIKE
    async function handleDislike(id){ 
        //AQ TEM UM AWAit
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id } 
        })

        setUsers(users.filter(user => user._id !== id));
    }


    return(
        <div className="main-container">
            <Link to="/">{/*PARA RETORNAR PARA A INDEX, CASO CLIQUE NA LOGO*/}
                <img src={logo} alt="Logo Tindev"/>
            </Link>
                
                { users.length > 0 ? (    
                    <ul>
                        {users.map(user => ( //PARA PERCORRER O useState E PERCORRER O ARRAY DE DEVS
                            <li key={user._id}> {/*DANDO VALOR UNICO PARA CADA, PRA CASO FOR REMOVER, EDITAR, MOVER..*/}
                                <img src={user.avatar} alt={user.name}/>
                                <footer>
                                    <strong>{user.name}</strong>
                                    <p>{user.bio}</p>
                                </footer>

                                <div className="buttons">
                                    <button type="button" onClick={() => handleDislike(user._id)}> {/*ESSA HERO FUNCTION, EVITA QUE A FUNÇÃO SEJA EXECUTADA ASSIM Q CHEGA NELA, PREVININDO DE ERRO*/}  
                                        <img src={dislike} alt="Dislike"/>
                                    </button>
                                    <button type="button" onClick={() => handleLike(user._id)}>
                                        <img src={like} alt="Like"/>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : ( //IF TERNÁRIO, PRA QUANDO ACABAR OS DEVS, EXIBIR ESTA MENSAGEM
                    <div className="empty">
                        Acabou :(
                    </div>
                )}

        </div>
    )   
}