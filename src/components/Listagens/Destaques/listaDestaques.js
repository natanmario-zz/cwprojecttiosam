import { React, useState, Fragment } from "react";
import Detalhes from "../Detalhes";
import { 
    makeStyles,
    Grid,
    Card,
    CardMedia,
    CardActionArea,
    CardContent,
    Typography,
    Button,
 } from "@material-ui/core";



const useStylesListaDestaques = makeStyles((theme) =>({
    card: {
        maxWidth: 345,
    },
    cardMedia: {
        height: 140,
    },
    botaoAdd: {
        padding: 10,
        width:'100%',
    }

}))


function ListaDestaques(props) {
    const classes = useStylesListaDestaques();
    

    var produtosDestaque = [];
    props.produtos.map( produto => (
       produto.destaque ? produtosDestaque.push(produto) : null 
    ))
    
    const [produto,setProduto] = useState([]);
    
    function showModalProduct(produto) {
        setProduto(produto);
    }
    return(
        
            <Fragment>
                {produtosDestaque.map( produto => (
                
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
                    <Card className={classes.card}>
                        <CardActionArea onClick={() => showModalProduct(produto)}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={produto.img}
                                title={produto.nome}/>
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                {produto.nome}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {produto.descricao} <br/>
                                R$ {produto.preco}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Button onClick={() => showModalProduct(produto)} className={classes.botaoAdd}>
                            Comprar
                        </Button>  
                    </Card>

                </Grid>
                
                ))}
                <Detalhes produto={produto}/>
        </Fragment>
            

            
        

            
    );
}



export default ListaDestaques;