import React, { Component } from "react";

class BotoesCarrinho extends Component {

    constructor(state) {
        super(state);
        this.state = {
            produto:{},
            quantidade: 0,
            valorTotal: 0
        };

        this.aumentarQuantidade = this.aumentarQuantidade.bind(this);
        this.diminuirQuantidade = this.diminuirQuantidade.bind(this);
        this.addCarrinho = this.addCarrinho.bind(this);
    }

    componentDidMount() {
        this.setState({produto: this.props.produto});
    }

    aumentarQuantidade() {
        let newState = this.state;
        newState.quantidade +=1;
    
        this.setState(newState);
    }
    
    diminuirQuantidade() {
        let newState = this.state;
        newState.quantidade -=1;
    
        this.setState(newState);
        alert(this.state.quantidade);
    }

    addCarrinho() {
        let total = this.state.produto.preco * this.state.quantidade;
        this.setState({valorTotal: total})
    }


    render() {
        return(
            <div>
                <button onClick={this.aumentarQuantidade}>+</button><br/>
                <button onClick={this.diminuirQuantidade}>-</button><br/>
                <button onClick={this.addCarrinho}>Add Carrinho</button>
            </div>
        );
    }

}

export default BotoesCarrinho;