import React  from 'react';

import ListaDestaques from './listaDestaques';

import { 
    Grid,
    Typography,
 } from "@material-ui/core";

function Destaques(prop) {
    
    const produtos = prop.produtos;
    return(
        <Grid container spacing={4} id="Destaques">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="h5"> Destaques </Typography>
            </Grid>
            
            <ListaDestaques produtos={produtos}/>
            
        </Grid>
        
    )
}

export default Destaques;