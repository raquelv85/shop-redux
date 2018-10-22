import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDollarSign, faTimes } from '@fortawesome/free-solid-svg-icons';
import { saveShop, addProduct, saveFav , deleteFav, deleteShop, deleteList, addUnity } from '../actions';
import { deleteItems } from '../utils/delete_items'

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      units: 1
    }
  }

  _add() {
    this.props.addProduct(this.state)
  }
  _shop(id) {

    let item = this.props.list[id];
    let list = this.props.shop;

    if (list.includes(item)) {
      list.map((item, index) => {
        if (item.id === id) {
          item.units += 1;
        }
      });
      this.props.addUnity(list);
    } else {
      this.props.saveShop(item);
    }
  }

  _fav(id) {
    let item = this.props.list[id];
    let listFav = this.props.fav;

    if(!listFav.includes(item)){
      this.props.saveFav(item);
    }

  }

  _delete(id) {
    let shop = this.props.list;
    shop = deleteItems(id, shop);
    this.props.deleteList(shop)
    this._deleteShop(id);
    this._deleteFav(id);
  }

  _deleteShop(id) {
    let shopList = this.props.shop;
    shopList = deleteItems(id, shopList);
    this.props.deleteShop(shopList)
  }

  _deleteFav(id) {
    let shopFav = this.props.fav;
    shopFav = deleteItems(id, shopFav);
    this.props.deleteFav(shopFav)
  }


  render() {
    return ( <div className = "container">
      <div className = "container-title">
      <h1 className = "title" > Catalogo </h1>
      </div>
      <div className = "container-list">
      <ul className = "list"> {
        this.props.list.map((item, index) => {
          return <li key={index} className = "item">
            <p> {item.name} </p>
            <p><FontAwesomeIcon 
            onClick={this._shop.bind(this,item.id)}
            icon = {faDollarSign}/></p>
            <p><FontAwesomeIcon 
            onClick={this._fav.bind(this, item.id)} icon={faStar}/></p>
            <p>< FontAwesomeIcon 
            onClick = {this._delete.bind(this, item.id)}
            icon = {faTimes}/></p>
          </li>
        })
      } </ul> </div> <div className = "container-inputs" >
      <input className = "input"
      type = "text"
      onChange = {
        (e) => {
          this.setState({
            name: e.target.value,
            id: this.props.list.length

          })
        }
      }
      /> <button className = "btn"
      onClick = {
        this._add.bind(this)
      }> AÑADIR </button></div> </div> 
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.catalogue.productList,
    shop: state.shop.shop,
    fav: state.fav.favorites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
    saveShop: (shop) => dispatch(saveShop(shop)),
    saveFav: (fav) => dispatch(saveFav(fav)),
    deleteList: (item) => dispatch(deleteList(item)),
    deleteShop: (item) => dispatch(deleteShop(item)),
    deleteFav: (item) => dispatch(deleteFav(item)),
    addUnity: (units) => dispatch(addUnity(units))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainList)