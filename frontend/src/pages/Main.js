import React from 'react';

import './Main.css'; //css

import logo from '../assets/logo.svg'; //LOGO IMAGE
import like from '../assets/like.svg'; //LIKE IMAGE
import dislike from '../assets/dislike.svg'; //DISLIKE IMAGE

export default function Main({ match }){
    return(
        <div className="main-container">
                
            <img src={logo} alt="Logo Tindev"/>
            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
                    <footer>
                        <strong>Vitor Rubim</strong>
                        <p>lorem ipsum loret it abdur asalat dulor adbad afloret asuk</p>
                    </footer>

                    <div className="buttons">
                        <button type="button"> 
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
                    <footer>
                        <strong>Vitor Rubim</strong>
                        <p>lorem ipsum loret it abdur asalat dulor adbad afloret asuk</p>
                    </footer>

                    <div className="buttons">
                        <button type="button"> 
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
                    <footer>
                        <strong>Vitor Rubim</strong>
                        <p>lorem ipsum loret it abdur asalat dulor adbad afloret asuk</p>
                    </footer>

                    <div className="buttons">
                        <button type="button"> 
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
                    <footer>
                        <strong>Vitor Rubim</strong>
                        <p>lorem ipsum loret it abdur asalat dulor adbad afloret asuk</p>
                    </footer>

                    <div className="buttons">
                        <button type="button"> 
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
            </ul>

        </div>
    )   
}