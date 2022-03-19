import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <>
                <div className="central">
                    <p > <img src="./img/tel.png" alt="" /> Central de atendimento: (71) 3245-6789. / Televendas: 0800 123 4567.</p>
                </div>
                <nav className="topo">                    
                    <div className="logo">
                        <img  src='../img/logo.png' width="150px: height:80px" alt="" />
                    </div>
                    <img className="icones" src="./img/tel.png" alt="" />               
                    <Link to="/" className="menu">Home</Link><br/>
                    <Link to="/Passagens" className="menu">Passagens</Link><br/>
                    <Link to="/Pacotes" className="menu">Pacotes</Link><br/>
                    <Link to="/cadastro-index" className="menu">Cadastro</Link> 
            </nav>
        </>
    );
}