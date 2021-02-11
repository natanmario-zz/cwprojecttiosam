/*import React, { Component } from 'react';
import pizzas from '../../pages/pizzas';
import pasteis from '../../pages/pasteis';
import bebidas from '../../pages/bebidas';
import Categorias from '../categorias';
class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
      produto:{},
      quantidade: 0,
      precoTotal: 0
    };

    this.loadCategorias = this.loadCategorias.bind(this);
    
  }
  
  componentDidMount() {
    this.loadCategorias();
  }

  loadCategorias() {
    var categoriasCarregadas = [...pizzas,...pasteis,...bebidas];
    this.setState({categorias: categoriasCarregadas});
  }





  render() {
    return(
      <div>
        <Categorias produtos={this.state.categorias}/>
      </div>
    );
  }
}

export default Home;*/