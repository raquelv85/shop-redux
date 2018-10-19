import React, { Component } from 'react';
import './App.css';
import MainList from './components/MainList';
import ListaFav from './components/ListaFav';
import ListaCompra from './components/ListaCompra';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {  }
  }


  render() {
   
    return (
      <div className="container-catalogo">
            <MainList></MainList>
            <ListaCompra></ListaCompra>
            <ListaFav></ListaFav>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
