import React from 'react';
//IMPORTANDO AS ROTAS DO PACOTE
import { BrowserRouter, Route} from 'react-router-dom';
//BrowserRouter: ROTEAMENTO NO BROWSER

import Login from './pages/Login'; //IMPORTANDO LOGIN
import Main from './pages/Main'; //IMPORTANDO Main

export default function Routes(){
    return(
        <BrowserRouter> {/*TEM QUE FICAR POR VOLTA DE TODAS AS ROTAS*/}
            <Route path="/" exact component={Login}/> 
            {/* 1º ROTA DE LOGIN 
                path: É A ROTA DA PAGE 
                component: É SE ESTIVER NA ROTA PATH, CHAMA O LOGIN NESSE CASO. 
                exact: É PQ A ROTA TEM QUE SER EXATAMENTE A QUE É PASSADA NO PATH */}

            <Route path="/dev/:id" component={Main}/> {/*ROTA DE DEVS, QUE RECEBE UM ID*/}
        </BrowserRouter>
    );
}