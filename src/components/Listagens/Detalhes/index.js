import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { Modal } from "../styles.js";
import { addProduct } from "../../../store/modules/basket/actions";
import { 
    makeStyles,
    Button,
    DialogContentText,
    DialogContent,
    Dialog,
    DialogTitle,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Divider,

 
} from "@material-ui/core";

const useStylesListaDestaques = makeStyles(() =>({
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


export default function Detalhes(props) {
    const dispatch = useDispatch();
    const classes = useStylesListaDestaques();
    const[show,setShow] = useState(false);
    const[produto,setProduto] = useState([]);
    const[complementos,setComplementos] = useState([]);
    const[subitem,setSubitem] = useState(false);
    const[valor,setValor] = useState(0);
    const[valorAux,setValorAux] = useState(0);
    const handleChange = (event) => {
        setSubitem(event.target.value);
    };

    const handleChangeCheck = (event) => {
        if(event.target.checked) {
            complementos.map(complemento =>(
                complemento.nome === event.target.name?
                    setValorAux(valorAux + complemento.preco)
                    : null                 
            ));
        }
        else {
            complementos.map(complemento =>(
                complemento.nome === event.target.name?
                    setValorAux(valorAux - complemento.preco)
                    : null                 
            ));
        }
    };

    useEffect(setarProduto,[props]);
    useEffect(setarDialog,[produto]);
    useEffect(calcularValor,[subitem]);
    useEffect(() => setValor(valorAux + produto.preco),[valorAux]);
    useEffect(() => {setValor(0);setValorAux(0);setSubitem(false)},[show]);
    function setarProduto() {
        if(props.produto.codigo) {
            setProduto(props.produto);
        }    
    }

    function setarDialog() {
        if(produto.codigo) {
            setShow(true);
            if(produto.complementoObrigatorio) {
                setComplementos(produto.complementoObrigatorio);
            }
            else if(produto.complementoOpicional) {
                setComplementos(produto.complementoOpicional);
            }
            
        }

    }

    function calcularValor() {
        if(complementos[0]) {
            
            complementos.map( complemento => (
                complemento.nome === subitem ?
                    setValor(produto.preco + complemento.preco)
                    : null
            ));
        }
    }

    function handleAddCarrinho(produto){
        dispatch(addProduct(produto));
    }
    

    return(
        <Dialog onClose={() => setShow(false)} open={show}>
                <DialogContent>
                    <Modal>
                        <img src={produto.img}/>
                        <DialogTitle>
                            {produto.nome}
                        </DialogTitle>
                        <DialogContentText>
                            {produto.descricao}
                        </DialogContentText>
                        <Divider/>
                        {produto.complementoObrigatorio ?
                            
                                <FormGroup style={{marginTop:'2%'}}>
                                    
                                    <div className={classes.legendaComplemento}>
                                        
                                            <FormLabel style={{color:'white'}}>
                                                {produto.nomeComplemento}
                                            </FormLabel>  
                                        
                                        
                                    </div>
                                    
                                    

                                    <RadioGroup arial-label="borda" name="borda" value={subitem} onChange={handleChange}>
                                        {complementos.map(complemento => (
                                            <FormControlLabel
                                                classes={{label:classes.label}} 
                                                value={complemento.nome}
                                                control={<Radio size='small' color="black"/>}
                                                label={complemento.nome}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormGroup>
                            :
                            <FormGroup style={{marginTop:'2%'}}>
                                <div className={classes.legendaComplemento}>
                                    <FormLabel component="label" style={{color:'white'}}>
                                        Adicional
                                    </FormLabel>
                                </div>
                                
                                
                                {complementos.map(complemento => (
                                    <FormControlLabel control={
                                        <Checkbox
                                            onChange={handleChangeCheck}
                                            name={complemento.nome}
                                            color="primary"
                                            size="small"
                                        />}
                                        label={complemento.nome}
                                        classes={{label:classes.label}}
                                    />
                                ))}
                                
                            </FormGroup>
                            

                        }

                        <DialogContentText align='right' color='black'>
                            R$ {valor ? produto.valor = valor : produto.preco}
                        </DialogContentText>
                        <Button variant="contained" color="primary" onClick={() => handleAddCarrinho(produto)} className={classes.botaoAdd}>
                            Comprar
                        </Button> 
                    </Modal>
                </DialogContent>
        </Dialog>
    );
}