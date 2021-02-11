import { React, Fragment, useState, useEffect } from "react";
import { 
    Grid,
    Typography,
 } from "@material-ui/core";
import ListaProdutos from "./listaProdutos";

export default function Categorias(props) {
    const[products,setProducts] = useState([]);
    
    useEffect(() => updateProducts(),[props.produtos]);

    function updateProducts() {
        setProducts(props.produtos); 
        
    }

        
    var categoria = '';

    return(
        <Grid container spacing={4} >
            {props.produtos.map(produto =>(
                (categoria != produto.tipo? 
                    <Fragment>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} id={categoria = produto.tipo}>
                            <Typography variant="h5"> {categoria} </Typography>
                        </Grid>
                        <ListaProdutos categoria={categoria}/>
                    </Fragment>

                : null)
            ))}
            
            
            
        </Grid>
    )

    

}