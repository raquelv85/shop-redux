import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteShop ,deleteUnits } from '../actions';
import { deleteItems } from '../utils/delete_items';



class ListShop extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  _delete(id){
    let  shopList = this.props.listShop;
    shopList.map((item, index) =>{
      if(item.id === id){
        if(item.units > 1){
          item.units -= 1;
          this.props.deleteUnits(shopList)
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
              <p>{item.name}</p>
              <p>{item.units}</p>
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
    listShop : state.shop.shop
  } 
}

function mapDispatchToProps (dispatch) {
  return {
    deleteShop: (item) => dispatch(deleteShop(item)),
    deleteUnits: (item) => dispatch(deleteUnits(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListShop)