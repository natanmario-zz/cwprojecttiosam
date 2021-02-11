import React, { Component } from "react";

class Carrinho extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            produtos = [],
            total = 0
        };

        this.atualizarCarrinho() = this.atualizarCarrinho.bind(this);
    }

    atualizarCarrinho() {
        let newState = this.state;
        
        newState.produtos = [...this.props.produto];
        newState.total += this.props.total;

        this.setState(newState);

    }

    render() {
        return(
            <div>
                {this.state.produtos.map(produto => {
                    return(
                        <div>
                            <h3>{produto.nome}</h3>
                            <h4>{this.props.quantidade}</h4>
                            <h4>{produto.preco}</h4>
                        </div>
                    );
                })}
                {this.state.total}
            </div>
        );
    }
}

export default Carrinho;