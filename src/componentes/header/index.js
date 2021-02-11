import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
//import './header.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { IconButton } from '@material-ui/core';


class Header extends Component {
    render() {
        return(
            <header className="header">
                <h1><Link smooth to="#estabelecimento">Tio Sam</Link></h1>
                <IconButton className="btn-menu">Categorias<ExpandMoreIcon/></IconButton>
                
                <nav className="menu">
                    <ExpandLessIcon/>
                    <ul>
                        <li><Link smooth to="#pizza">Pizzas</Link></li>
                        <li><Link smooth to="#pastel">Pastéis</Link></li>
                        <li><Link smooth to="#bebida">Bebidas</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;