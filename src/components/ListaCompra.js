import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteShop } from '../actions';
import { deleteItems } from '../utils/delete_items';
import { deleteUnidades } from '../actions';


class ListaCompra extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  _delete(id){
    let  shopList = this.props.listShop;
    shopList.map((item, index) =>{
      if(item.id === id){
        if(item.unidades > 1){
          item.unidades -= 1;
          this.props.deleteUnidades(shopList)
        }else{
          shopList = deleteItems(id, shopList);
          this.props.deleteShop(shopList);
        }
      }
    });
  }
  render() { 
    return ( 
    <div className="container">
        <h1 className="title">Compra</h1>
        <ul className="list">
        {
          this.props.listShop.map((item, index) =>{
              return <li key={index} className= "item">
              <p>{item.nombre}</p>
              <p>{item.unidades}</p>
              <p><FontAwesomeIcon onClick= {this._delete.bind(this, item.id)} icon={faTimes}/></p>
           </li>
          })
        }
      </ul>
    </div> 
    );
  }
}
 
function mapStateToProps (state) {
  return {
    listShop : state.shop.compra
  } 
}

function mapDispatchToProps (dispatch) {
  return {
    deleteShop: (item) => dispatch(deleteShop(item)),
    deleteUnidades: (item) => dispatch(deleteUnidades(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListaCompra)