import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component{

    render(){
        return(
            <nav>
                <ul className="header-menu">
                    <li>
                        <NavLink to="/"
                        className={(navData) => (navData.isActive ? "on-it" : 'none')}
                        >Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/kasa-react/apropos"
                        className={(navData) => (navData.isActive ? "on-it" : 'none')}
                        >A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;