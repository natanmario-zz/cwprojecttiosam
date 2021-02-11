import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { 
    List,
    ListItem,
    ListItemText,

 } from '@material-ui/core';


export default function ListaCategorias(prop) {
    
    var categoria = '';

    return(
        <List style={{maxHeight: 300, overflow: 'auto'}}>
            {prop.produtos.map(produto =>(
                (categoria != produto.tipo? 
                    <ListItem button>
                        <ListItemText>
                            <Link smooth to={`#${categoria = produto.tipo}`} 
                                style={{textDecoration:'none', color:'black'}}>
                                {categoria}
                            </Link>
                        </ListItemText>
                    </ListItem>
                    : null)
            ))}
        </List>

        
    )
}