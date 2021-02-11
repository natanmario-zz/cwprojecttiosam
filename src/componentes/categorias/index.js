import React, { Component } from "react";
import BotoesCarrinho from '../botoesCarrinho';

class Categorias extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            produtos: []
        };

    }


    render() {
        return(
            <div>
                { this.props.produtos.map( produto => {
                    return(
                        <div className={produto.tipo} id={produto.tipo} key={produto.codigo}>
                            <h2>{produto.nome}</h2>
                            <h3>{produto.descricao}</h3>
                            <h3>{produto.preco}</h3>
                            <img alt={produto.nome} src={produto.img}></img><br/>
                            <BotoesCarrinho produto={produto}/>
                        </div>
                    );
                } ) }               
            </div>
        );
    }
}

export default Categorias;