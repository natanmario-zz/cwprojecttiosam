import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { 
    makeStyles,
    useStales,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Hidden,
    Menu,
    MenuItem,
    Tabs,
    Tab,
} from "@material-ui/core";

import { 
    LocalOffer,
    ShoppingBasket,
    MoreVert,
    List as ListaIcone
} from "@material-ui/icons";
import ListaCategoriasResponsivo from './listaCategoriasResponsivo';
{/* ===== END IMPORTS =====*/}

{/* ===== CLASSES =====*/}
const useStylesHeader = makeStyles((theme) =>({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        maxHeight: 60,
    },
    grow: {
        flexGrow: 1
    },
    title: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(10),
        display: 'inline',
    },
    icons: {
        paddingRight: theme.spacing(10)
    },
    icon: {
        paddingRight: theme.spacing(2)
    },
    navCategorias: {
        flexGrow: 1,
        width: '100%',   
    },
}));
{/* ===== END CLASSES =====*/}

function Header(prop) {
    
    const classes = useStylesHeader();
    
    {/* ===== SIMPLE MENU ===== */}
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    {/* ======================== */}


    return(
        <AppBar className={classes.appBar}>
                <Toolbar>
                
                    <Typography variant="h6" className={classes.title}>
                        Pizzaria Tio Sam
                    </Typography>
                    <div className={classes.grow}/>
                    <Hidden only='xs'>
                        <div className={classes.icons}>
                            
                                <IconButton className={classes.icon} color="secondary">
                                    <Link style={{color:'white'}} smooth to="#Destaques"><LocalOffer/></Link>
                                </IconButton>
                                <IconButton className={classes.icon} color="secondary">
                                    <ListaIcone/>
                                </IconButton>
                                <IconButton className={classes.icon} color="secondary">
                                    <Link style={{color:'white'}} to='#'><ShoppingBasket/></Link>
                                </IconButton>
                            
                        </div>
                    </Hidden>
                        {/* ========= ICONES NAVBAR SUPERIOR RESPONSIVO ========= */}
                        <Hidden smUp>
                            
                            <div>
                                    <IconButton
                                        aria-controls="simple-menu" 
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                        className={classes.icon}
                                        color="secondary"
                                    >
                                        <MoreVert/>
                                    </IconButton>
                                
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <Link smooth to='#Destaques' style={{textDecoration:'none', color:'black'}}>
                                        <MenuItem onClick={handleClose}>
                                            <LocalOffer fontSize="small"/>
                                            <Typography style={{paddingLeft: 5}} variant="subtitle1">Ofertas</Typography>
                                        </MenuItem>
                                    </Link>
                                        <MenuItem onClick={handleClose}>
                                            <ListaIcone fontSize="small"/>
                                            <Typography style={{paddingLeft: 5}} variant="subtitle1">Pedidos</Typography>
                                        </MenuItem>
                                    
                                    
                                    
                                </Menu>
                            </div>
                            
                        </Hidden>
                    
                
                </Toolbar>
                {/* ========= CATEGORIAS RESPONSIVO ========= */}
                <Hidden smUp>
                    <AppBar position="static" color="secondary" className={classes.navCategorias}>
                        <center><ListaCategoriasResponsivo produtos={prop.produtos}/></center>
                    </AppBar>
                </Hidden>
        </AppBar>
    );
}

export default Header;