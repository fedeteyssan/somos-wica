
import React from "react";
import "./Navbar.scss";
import logo from "../../assets/Logo-Wica.jpg"
import CartWidget from "../cartWidget/CartWidget";

const Navbar = () => {

    return (
        <header>
            <nav>
                <a href="index.html">
                    <img src={logo} alt="" className="brand-logo"/>
                </a>
                <ul className="nav-menu">
                    <li>
                        <a href="#Nosotros">Nosotros</a>
                    </li>
                    <li>
                        <a href="#Productos">Productos</a>
                    </li>
                    <li>
                        <a href="#Donde-comprar">Donde comprar</a>
                    </li>
                    <li>
                        <a href="#Contacto">Contacto</a>
                    </li>
                </ul>
                <CartWidget />
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
        
    )
}
export default Navbar;



