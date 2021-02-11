import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct, deleteProduct } from '../../store/modules/basket/actions'

import { 
    makeStyles,
    Hidden,
    AppBar,
    Toolbar,
    Typography,
    Fab,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton
 } from "@material-ui/core";

 import {
     ShoppingBasket,
     AddCircle,
     RemoveCircle,
     Delete,
 } from '@material-ui/icons';

const useStylesBasketMobile = makeStyles((theme) => ({
    appBarButton: {
        top: 'auto',
        bottom: 0,
    },
    titleAppBarBottom: {
        paddingLeft: theme.spacing(3),
    },
    valueAppBarBottom: {
        paddingRight: theme.spacing(3),
    },
    sacolaButton: {
        position: 'absolute',
        zIndex: 1,
        top: -25,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    grow: {
        flexGrow: 1,
    }    
}));

function BasketMobile() {
    
    const produtos = useSelector(state => state.basket);    
    const dispatch = useDispatch();

    function addAmount(produto) {
        dispatch(addProduct(produto));
    }

    function removeAmount(codigo) {
        dispatch(removeProduct(codigo));
    }

    function handleDelete(codigo) {
        dispatch(deleteProduct(codigo));
    }



    const classes = useStylesBasketMobile();

    const [show, setShow] = React.useState(false);
    
    // ===== HABILITAR/DESABILITAR BOTAO SACOLA ===== //
    const [disable, setDisable] = React.useState(true);

    React.useEffect(() => {
        if(produtos.length > 0) setDisable(false)
        else setDisable(true);
    });
    // =================== END =================== //
    
    var valorTotal = 0.00

    return(
        <Hidden smUp>
            <div>
                <AppBar position="fixed" color="primary" className={classes.appBarButton}>
                    <Toolbar>
                        
                        <React.Fragment>
                            <Fab disabled={disable}
                                color="secondary"
                                size="medium" 
                                className={classes.sacolaButton}
                                onClick={() => setShow(true)}
                            >
                                <ShoppingBasket/>
                            </Fab>
                            <Drawer anchor="bottom" onClose={() => setShow(false)} open={show}>
                                <List style={{paddingLeft: 20, paddingBottom: 20,maxHeight: 300, overflow: 'auto'}}>
                                    {produtos.map(produto => ( valorTotal += produto.valor*produto.amount,
                                        <ListItem key={produto.codigo}>
                                            <ListItemText>
                                                <Typography variant="body1">
                                                    {produto.amount}x
                                                </Typography>
                                                <Typography variant="body2">
                                                    {produto.nome} R$ {produto.valor*produto.amount}
                                                </Typography>
                                            </ListItemText>
                                            <ListItemIcon>
                                            <IconButton onClick={() => addAmount(produto)}>
                                                <AddCircle fontSize="small"/>
                                            </IconButton>
                                            <IconButton onClick={() => removeAmount(produto.codigo)}>
                                                <RemoveCircle fontSize="small"/>
                                            </IconButton>
                                            <IconButton onClick={() => handleDelete(produto.codigo)}>
                                                <Delete fontSize="small"/>
                                            </IconButton>
                                            </ListItemIcon>
                                        </ListItem> 
                                        //Calculando valor total
                                        
                                        
                                    ))}
                                </List>
        
                            </Drawer>
                        
                        
                        </React.Fragment>
                            <Typography variant="h6" className={classes.titleAppBarBottom}>Total</Typography>
                            <div className={classes.grow}/>
                            <Typography variant="h6" className={classes.valueAppBarBottom}>R$ {valorTotal}</Typography>
                        
                    </Toolbar>
                </AppBar>
            </div>
                    
        </Hidden>
    );
}

export default BasketMobile;