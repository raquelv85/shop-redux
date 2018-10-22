import React, { Component } from 'react';
import './App.css';
import MainList from './components/MainList';
import ListFav from './components/ListFav';
import ListShop from './components/ListShop';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {  }
  }


  render() {
   
    return (
      <div className="container-catalogue">
            <MainList></MainList>
            <ListShop></ListShop>
            <ListFav></ListFav>
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
