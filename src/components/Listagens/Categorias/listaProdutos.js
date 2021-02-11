import { React, useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Detalhes from "../Detalhes";
import { addProduct } from "../../../store/modules/basket/actions";
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

const useStylesListaDestaques = makeStyles(() =>({
    card: {
        maxWidth: 345,
    },
    cardMedia: {
        height: 140,
        backgroundSize: 'cover',
    },
    botaoAdd: {
        padding: 10,
        width:'100%',
    },
    label: {
        fontSize: '16px',
    },
    legendaComplemento: {
        padding:4,
        width:'100%',
        backgroundColor:'#ff7675',
        textAlign:'center',
        
    }

}))


export default function ListaProdutos(prop) {
    
    const dispatch = useDispatch();
    const classes = useStylesListaDestaques();
    
    function handleAddCarrinho(produto){
        dispatch(addProduct(produto));
    }

    // Carregando produtos pela categoria //
    const produtos = useSelector(state => state.products);
    const categoria = prop.categoria;
    var produtosCategoria = [];

    produtos.map(produto =>(
        produto.tipo === categoria? 
            produtosCategoria.push(produto) : null
    ));
    // ============== END ==============//
    
    const [produto,setProduto] = useState([]);
    
    
    function showDialogProduct(prop) {
        setProduto(prop);
    }

    return(
        
        <Fragment>
            {produtosCategoria.map( produto => (
        
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
                    <Card className={classes.card}>
                        <CardActionArea onClick={() => showDialogProduct(produto)}>
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
                        <Button onClick={() => showDialogProduct(produto)} className={classes.botaoAdd}>
                            Comprar
                        </Button> 
                    </Card>
                </Grid>

            ))}

            <Detalhes produto={produto}/>
            
        </Fragment>
        
       
    )
}

