import { React, Fragment, useState, } from "react";
import { 
    Toolbar,
    Button,
    Collapse,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    makeStyles,
 } from "@material-ui/core";

import { 
     ExpandMore,
     ExpandLess,
     LocationOn,
     AccessTime,
     Payment,

  } from "@material-ui/icons";

import BackGround from '../../imgs/bg.png';

const useStyles = makeStyles((theme) => ({
    botaoInfos: {
        
        
        
    },
 }))
export default function Estabelecimento() {
    
    const classes = useStyles();

    // ===== HANDLE INFORMÇÕES ESTABELECIMENTO ===== //

    const[show,setShow] = useState(false);
    const[icone,setIcone] = useState(<ExpandMore/>);

    function handleInfEst() {
        show === false ? openInfos() : closeInfos();
    }

    function openInfos() {
        setShow(true);
        setIcone(<ExpandLess/>);
    }

    function closeInfos() {
        setShow(false);
        setIcone(<ExpandMore/>);
    }

    // ===== END HANDLE VER MAIS =====//
    
    return(
        
        <Fragment>
            <div style={{
                position: 'relative',
                height:'400px',
                width:'100%',
                backgroundImage:`url(${BackGround})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition:"center",
                backgroundSize:"cover",
                }}>
                <Toolbar/>
                <Button variant="contained"
                    style={{
                        textAlign:'center',
                        color:'white',
                        background: 'rgba(0,0,0,0.5)',
                        padding:'10px',
                        position:'absolute',
                        bottom:'3%',
                    }}
                    onClick={handleInfEst}
                    endIcon={icone}
                    className={classes.botaoInfos}
                
                >INFORMAÇÕES</Button>
            </div>
         {/* ========= INFORMAÇÕES ESTABELECIMENTO ========= */}
            <Collapse in={show} timeout="auto" unmountOnExit>
                <Card style={{marginTop:5}}>
                    <CardContent>
                        <List>
                            <ListItem>
                                <ListItemIcon><LocationOn/></ListItemIcon>
                                <ListItemText><Typography variant="body1">
                                    Rua Basilice Braga, 169
                                </Typography></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><AccessTime/></ListItemIcon>
                                <ListItemText><Typography variant="body1">
                                    Seg - Sex: 18hrs ~ 23hrs
                                </Typography></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Payment/></ListItemIcon>
                                <ListItemText><Typography variant="body1">
                                    Aceitamos cartões de crédito e débito.
                                </Typography></ListItemText>
                            </ListItem>
                        </List>
                    
                    </CardContent>
                </Card>
            </Collapse>
        </Fragment>
        
    );
}