import React, { Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct, removeProduct} from '../../store/modules/basket/actions';
import { 
    makeStyles,
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Divider,
    Box,
    Hidden,
    IconButton,
} from "@material-ui/core";
import { 
    AddCircle,
    RemoveCircle,
    Delete,
       
 } from "@material-ui/icons";
import ListaCategorias from './listaCategorias';
const useStylesDrawer = makeStyles((theme) => ({
    drawer: {
        width: 'min(240px,30%)',
        flexShrink: 0,
    },
    drawerPaper: {
        width: 'min(240px,30%)',
    },
    grow: {
        flexGrow: 0,
    }
}));

function MenuDrawer(prop) {
    const dispatch = useDispatch();
    const produtos = useSelector(state => state.basket);    
    const classes = useStylesDrawer();

    function addAmount(produto) {
        dispatch(addProduct(produto));
    }

    function removeAmount(codigo) {
        dispatch(removeProduct(codigo));
    }

    function handleDelete(codigo) {
        dispatch(deleteProduct(codigo));
    }

    var valorTotal = 0.00;

    return(
        <Hidden only='xs'>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                    <div>
                        <ListaCategorias produtos={prop.produtos}/>
                        
                        <Divider />
                        
                        <Box p={1}>
                        <Typography variant="h6"><center>Sacola</center></Typography>
                            <List>
                                {produtos.map(produto =>( valorTotal += produto.valor*produto.amount,
                                    <Fragment>
                                        <ListItem>
                                            <ListItemText>
                                                <Typography variant="body2">
                                                    {produto.amount}x
                                                </Typography>
                                                <Typography variant="body1">
                                                    {produto.nome}
                                                </Typography>
                                                <Typography variant="body2">
                                                    R$ {produto.valor*produto.amount}
                                                </Typography>
                                            </ListItemText>
                                            
                                            <ListItemIcon>
                                                <IconButton edge='end' onClick={() => addAmount(produto)}>
                                                    <AddCircle fontSize="small"/>
                                                </IconButton>
                                                <IconButton edge='end' onClick={() => removeAmount(produto.codigo)}>
                                                    <RemoveCircle fontSize="small"/>
                                                </IconButton>
                                                <Hidden only={['xs','sm']}>
                                                    <IconButton edge='end' onClick={() => handleDelete(produto.codigo)}>
                                                        <Delete fontSize="small"/>
                                                    </IconButton>
                                                </Hidden>
                                                
                                            </ListItemIcon>
                                            
                                        </ListItem>
                                        <Divider style={{height:'3px'}}/>
                                    </Fragment>
                                ))}
                                <ListItem>
                                    <ListItemText>
                                        <Typography variant="h6" style={{float:"left"}}>
                                            Total  
                                        </Typography>
                                        <Typography variant="h6" style={{float:"right"}}>
                                            R$ {valorTotal}
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Box>
                    </div>
            </Drawer>
        </Hidden>
    );
}

export default MenuDrawer;