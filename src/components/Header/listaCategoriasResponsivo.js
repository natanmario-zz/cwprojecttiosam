import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { 
    Tabs,
    Tab,
 } from "@material-ui/core";
export default function ListaCategoriasResponsivo(prop) {
    
    var categoria = '';
    
    return(
        <Tabs
            value={false}                    
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            variant="fullWidth"
            centered  
        >
            
            {prop.produtos.map(produto => (
                (categoria != produto.tipo?
                    <Link smooth to={`#${categoria = produto.tipo}`} style={{textDecoration:'none', color:'black'}}>
                        <Tab label={categoria}/>
                    </Link> 
                    : null)
            ))}
        </Tabs>
        
    )

}