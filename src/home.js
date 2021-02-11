import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setarProducts } from "./store/modules/products/actions";
import Header from './components/Header';
import MenuDrawer from './components/Drawer';
import BasketMobile from './components/BasketMobile';
import Destaques from './components/Listagens/Destaques';
import pizzas from './itens/Pizzas';
import bebidas from './itens/Bebidas';
import pasteis from './itens/Pasteis';
import Categorias from './components/Listagens/Categorias';
import Estabelecimento from './components/Estabelecimento';
import { 
    makeStyles,
    Toolbar,
    Box,
    Hidden,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        background: '#ecf0f1',
        height: '100%',
    },
}));


function Home() {
    
    const classes = useStyles();
    
    const dispatch = useDispatch();
    
    //Carregando os produtos da pasta itens
    // e colocando na store
    const[produtos, setProdutos] = useState([]);

    useEffect(loadProdutos,[])

    function loadProdutos() {
        var produtosCarregados = [...pizzas,...pasteis,...bebidas]
        setProdutos(produtosCarregados);
        dispatch(setarProducts(produtosCarregados));
    }
    
    return(
        
        <div className={classes.root}>
            

            {/* ========= NAVBAR SUPERIOR ========= */}
            <Header produtos={produtos}/>

            <Box display="flex">
                
                {/* ========= MENU LATERAL (CATEGORIAS/SACOLA) ========= */}
                <MenuDrawer produtos={produtos}/>

                {/* ========= APPBAR BOTTOM - MOBILE ========= */}
                <BasketMobile/>

                <Box p={4}>
                    {/* ========= BANNER ESTABELECIMENTO ========= */}
                    <Estabelecimento/>
 
                            {/* ========= DESTAQUES ========= */}
                            <Destaques produtos={produtos}/>
                            
                            {/* ========= CATEGORIAS ========= */}
                            <Categorias produtos={produtos}/>

                            <Hidden only={['lg','xl','md']}>
                                <Toolbar style={{paddingBottom:70}}/>
                            </Hidden>
                             
                </Box>
        
            </Box>

        </div>

    );
}

export default Home;