import React from "react";
import { Link } from "react-router-dom";
import "../Layout/Styles/MenuBootstrap.css";

export default function MenuBootstrap() {
    return (
        <>
        <div className="central">
                    <p > <img src="./img/tel.png" alt="" /> Central de atendimento: (71) 3245-6789. / Televendas: 0800 123 4567.</p>
                </div>
        <nav className="navbar navbar-expand-lg topo">
            
            <img className="logo-menu" src='../img/logo.png' style={{width:"150px"}} alt="" />

                <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
                </button>

                    <div class="collapse navbar-collapse" id="navbarNav">

                        <ul class="navbar-nav">

                            <li class="nav-item active">
                            <Link className="menu" to="/">Home</Link><br/>
                            </li>
                            <li class="nav-item active">
                            <Link className="menu" to="/Passagens">Passagens</Link><br/>
                            </li>
                            <li class="nav-item active">
                            <Link className="menu" to="/Pacotes">Pacotes</Link><br/>
                            </li>
                            <li class="nav-item active">
                            <Link className="menu" to="/cadastro-index">Cadastro</Link> 
                            </li>
                      </ul>
              </div>
        </nav>
        </>
    );
}